import FHIR from "fhirclient"
import cql from 'cql-execution';
import cqlfhir from 'cql-exec-fhir';
import extractResourcesFromELM from './extractResourcesFromELM';

function doSearch(smart, type, collector, callback) {
  const q = new URLSearchParams();

  // If this is for Epic, there are some specific modifications needed for the queries to work properly
  if (process.env.REACT_APP_EPIC_SUPPORTED_QUERIES
      && process.env.REACT_APP_EPIC_SUPPORTED_QUERIES.toLowerCase() === 'true') {
    switch (type) {
    case 'Observation':
      // Epic requires you to specify a category or code search parameter, so search on all categories
      q.set('category',
        ['social-history', 'vital-signs', 'imaging', 'laboratory', 'procedure', 'survey', 'exam', 'therapy'].join(','));
      break;
    case 'MedicationOrder':
      // Epic returns only active meds by default, so we need to specifically ask for other types
      q.set('status', ['active', 'completed', 'stopped', 'on-hold', 'draft', 'entered-in-error'].join(','));
      break;
    case 'MedicationStatement':
      // Epic returns only active meds by default, so we need to specifically ask for other types
      q.set('status', ['active', 'completed', 'intended', 'entered-in-error'].join(','));
      break;
    default:
      //nothing
    }
  }

  const resources = [];
  const uri = `${type}?${q}`;
  smart.patient.request(uri, {
    pageLimit: 0, // unlimited pages
    onPage: processPage(uri, collector, resources)
  }).then(() => {
    callback(resources);
  }).catch((error) => {
    collector.push({ error: error, url: uri, type: type, data: error });
    callback(resources, error);
  });
}

function processPage(uri, collector, resources) {
  return (bundle) => {
    // Add to the collector
    let url = uri;
    if (bundle && bundle.link && bundle.link.some(l => l.relation === 'self' && l.url != null)) {
      url = bundle.link.find(l => l.relation === 'self').url;
    }
    collector.push({ url: url, data: bundle});
    // Add to the resources
    if (bundle.entry) {
      bundle.entry.forEach(e => resources.push(e.resource));
    }
  }
}

function executeELM(elm, elmDependencies, valueSetDB, collector, resultsCallback) {
  const repository = new cql.Repository(elmDependencies);
  const lib = new cql.Library(elm, repository);
  const resources = extractResourcesFromELM(lib);
  const codeService = new cql.CodeService(valueSetDB);
  const executor = new cql.Executor(lib, codeService);

  FHIR.oauth2.ready().then((smart) => {
    smart.patient.read().then((pt) => {
      collector.push({ data: pt, url: `Patient/${pt.id}`});
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
    }).catch((error) => {
      resultsCallback(null, error);
    });
  }).catch((error) => {
    console.error(error);
  });
}

export default executeELM;
