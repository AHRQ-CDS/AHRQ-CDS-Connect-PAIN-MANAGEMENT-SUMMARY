import 'fhirclient'; // sets window.FHIR
import cql from 'cql-execution';
import cqlfhir from 'cql-fhir';
import extractResourcesFromELM from './extractResourcesFromELM';

function doSearch(smart, type, takeTwo, collector, callback) {
  const q = {};
  // Epic requires you to specify a category or code search parameter, so search on all categories
  if (takeTwo && type === 'Observation') {
    console.log('Adding observation categories to search criteria on 2nd attempt.');
    q.category = ['social-history', 'vital-signs', 'imaging', 'laboratory', 'procedure', 'survey', 'exam', 'therapy'];
  } else if (type === 'Medication') {
    // Special handling for Medication -- we don't want to query them all! (and probably can't anyway)
    // TODO: This should be broadened to more than MedicationOrder
    smart.patient.api.search({ type: 'MedicationOrder', query: {} }).then(
      (response) => {
        collector.push(response);
        if (response.data && response.data.resourceType === 'Bundle') {
          const medRefEntries = response.data.entry.filter(e => e.resource.medicationReference != null);
          const medRefs = medRefEntries.map(e => e.resource.medicationReference.reference);
          const medIds = new Set(medRefs.map(r => r.substring(r.lastIndexOf('/') + 1) ));
          if (medIds.size > 0) {
            smart.patient.api.search({ type: 'Medication', query: { _id: Array.from(medIds).join(',') } }).then(
              (response) => {
                if (response.data && response.data.resourceType === 'Bundle') {
                  if (response.data.entry) {
                    callback(response.data.entry.map(e => e.resource));
                  } else {
                    callback([]);
                  }
                }
              }
            );
          } else {
            callback([]);
          }
        }
      }
    );
    return;
  }
  smart.patient.api.search({ type, query: q }).then(
    (response) => {
      collector.push(response);
      if (response.data && response.data.resourceType === 'Bundle') {
        if (response.data.entry) {
          callback(response.data.entry.map(e => e.resource));
        } else {
          callback([]);
        }
      } else {
        if (!takeTwo) {
          console.log(`Querying ${type} again due to failure to parse response.`);
          doSearch(smart, type, true, collector, callback);
        } else {
          callback(null, new Error('Failed to parse response', response));
        }
      }
    },
    (error) => {
      if (!takeTwo) {
        console.log(`Querying ${type} again due to received error.`, error);
        doSearch(smart, type, true, collector, callback);
      } else {
        collector.push(error);
        callback(null, error);
      }
    }
  );
}

function executeELM(elm, elmDependencies, collector, resultsCallback) {
  const repository = new cql.Repository(elmDependencies);
  const lib = new cql.Library(elm, repository);
  const resources = extractResourcesFromELM(lib);
  const executor = new cql.Executor(lib);

  window.FHIR.oauth2.ready((smart) => {
    smart.patient.read().then(
      (pt) => {
        collector.push({ data: pt, config: { url: `Patient/${pt.id}` }});
        const entryResources = [pt];
        const readResources = (resources, callback) => {
          const r = resources.pop();
          if (r == null) {
            callback();
          } else if (r === 'Patient') {
            readResources(resources, callback);
          } else  {
            doSearch(smart, r, false, collector, (results, error) => {
              if (results) {
                entryResources.push(...results);
              }
              if (error) {
                console.error(error);
              }
              readResources(resources, callback);
            });
          }
        }

        readResources(resources.slice(), () => {
          const bundle = {
            resourceType: "Bundle",
            entry: entryResources.map(r => ({ resource: r }))
          };
          const patientSource = cqlfhir.PatientSource.FHIRv102();
          patientSource.loadBundles([bundle]);
          const results = executor.exec(patientSource);
          resultsCallback(results.patientResults[Object.keys(results.patientResults)[0]]);
        });
      },
      (error) => {
        resultsCallback(null, error);
      }
    );
  });
}

export default executeELM;