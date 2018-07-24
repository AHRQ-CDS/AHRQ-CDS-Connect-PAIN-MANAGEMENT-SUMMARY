import 'fhirclient'; // sets window.FHIR
import cql from 'cql-execution';
import cqlfhir from 'cql-exec-fhir';
import extractResourcesFromELM from './extractResourcesFromELM';

function doSearch(smart, type, collector, callback) {
  const q = {};

  // If this is for Epic, there are some specific modifications needed for the queries to work properly
  if (process.env.REACT_APP_EPIC_SUPPORTED_QUERIES
      && process.env.REACT_APP_EPIC_SUPPORTED_QUERIES.toLowerCase() === 'true') {
    switch (type) {
    case 'Observation':
      // Epic requires you to specify a category or code search parameter, so search on all categories
      q.category =
        ['social-history', 'vital-signs', 'imaging', 'laboratory', 'procedure', 'survey', 'exam', 'therapy'].join(',');
      break;
    case 'MedicationOrder':
      // Epic returns only active meds by default, so we need to specifically ask for other types
      q.status = ['active', 'completed', 'stopped', 'on-hold', 'draft', 'entered-in-error'].join(',');
      break;
    case 'MedicationStatement':
      // Epic returns only active meds by default, so we need to specifically ask for other types
      q.status = ['active', 'completed', 'intended', 'entered-in-error'].join(',');
      break;
    default:
      //nothing
    }
  }
  smart.patient.api.search({ type, query: q }).then(
    processSuccess(smart, collector, [], callback),
    processError(smart, collector, callback)
  );
}

function processSuccess(smart, collector, resources, callback) {
  return (response) => {
    collector.push(response);
    if (response.data && response.data.resourceType === 'Bundle') {
      if (response.data.entry) {
        response.data.entry.forEach(e => resources.push(e.resource));
      }
      if (response.data.link && response.data.link.some(l => l.relation === 'next' && l.url != null)) {
        // There is a next page, so recursively process that before we do the callback
        smart.patient.api.nextPage({bundle: response.data}).then(
          processSuccess(smart, collector, resources, callback),
          processError(smart, collector, callback)
        );
      } else {
        callback(resources);
      }
    } else {
      callback(null, new Error('Failed to parse response', response));
    }
  }
}

function processError(smart, collector, callback) {
  return (error) => {
    collector.push(error);
    callback(null, error);
  }
}

function executeELM(elm, elmDependencies, valueSetDB, collector, resultsCallback) {
  const repository = new cql.Repository(elmDependencies);
  const lib = new cql.Library(elm, repository);
  const resources = extractResourcesFromELM(lib);
  const codeService = new cql.CodeService(valueSetDB);
  const executor = new cql.Executor(lib, codeService);

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
            doSearch(smart, r, collector, (results, error) => {
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
