import FHIR from 'fhirclient';
import cql from 'cql-execution';
import cqlfhir from 'cql-exec-fhir';
import extractResourcesFromELM from './extractResourcesFromELM';
import dstu2FactorsELM from '../cql/dstu2/FactorsToConsiderInManagingChronicPainFHIRv102.json'
import dstu2CommonsELM from '../cql/dstu2/CDSConnectCommonsForFHIRv102.json';
import dstu2HelpersELM from '../cql/dstu2/FHIRHelpers.json';
import r4FactorsELM from '../cql/r4/FactorsToConsiderInManagingChronicPainFHIRv401.json';
import r4CommonsELM from '../cql/r4/CDSConnectCommonsForFHIRv401.json';
import r4HelpersELM from '../cql/r4/FHIRHelpers.json';
import valueSetDB from '../cql/valueset-db.json';

class VSACAwareCodeService extends cql.CodeService {
  // Override findValueSetsByOid to extract OID from VSAC URLS
  findValueSetsByOid(id) {
    const [oid] = this.extractOidAndVersion(id);
    return super.findValueSetsByOid(oid);
  }

  // Override findValueSet to extract OID from VSAC URLS
  findValueSet(id, version) {
    const [oid, embeddedVersion] = this.extractOidAndVersion(id);
    return super.findValueSet(oid, version != null ? version : embeddedVersion);
  }

  /**
   * Extracts the oid and version from a url, urn, or oid. Only url supports an embedded version
   * (separately by |); urn and oid will never return a version. If the input value is not a valid
   * urn or VSAC URL, it is assumed to be an oid and returned as-is.
   * Borrowed from: https://github.com/cqframework/cql-exec-vsac/blob/master/lib/extractOidAndVersion.js
   * @param {string} id - the urn, url, or oid
   * @returns {[string,string]} the oid and optional version as a pair
   */
   extractOidAndVersion(id) {
    if (id == null) return [];

    // first check for VSAC FHIR URL (ideally https is preferred but support http just in case)
    // if there is a | at the end, it indicates that a version string follows
    let m = id.match(/^https?:\/\/cts\.nlm\.nih\.gov\/fhir\/ValueSet\/([^|]+)(\|(.+))?$/);
    if (m) return m[3] == null ? [m[1]] : [m[1], m[3]];

    // then check for urn:oid
    m = id.match(/^urn:oid:(.+)$/);
    if (m) return [m[1]];

    // finally just return as-is
    return [id];
  }
}

function executeELM(collector) {
  let client, release, library;
  return new Promise((resolve) => {
    // First get our authorized client and send the FHIR release to the next step
    const results = FHIR.oauth2.ready().then((clientArg) => {
      client = clientArg;
      return client.getFhirRelease();
    })
    // then remember the release for later and get the release-specific library
    .then((releaseNum) => {
      release = releaseNum;
      library = getLibrary(release);
    })
    // then query the FHIR server for the patient, sending it to the next step
    .then(() => client.patient.read())
    // then gather all the patient's relevant resource instances and send them in a bundle to the next step
    .then((pt) => {
      collector.push({ data: pt, url: `Patient/${pt.id}`});
      const requests = extractResourcesFromELM(library).map((name) => {
        if (name === 'Patient') {
          return [pt];
        }
        return doSearch(client, release, name, collector);
      });
      // Don't return until all the requests have been resolved
      return Promise.all(requests).then((requestResults) => {
        const resources = [];
        requestResults.forEach(result => resources.push(...result));
        return {
          resourceType: "Bundle",
          entry: resources.map(r => ({ resource: r }))
        };;
      });
    })
    // then execute the library and return the results (wrapped in a Promise)
    .then((bundle) => {
      const patientSource = getPatientSource(release);
      const codeService = new VSACAwareCodeService(valueSetDB);
      const executor = new cql.Executor(library, codeService);
      patientSource.loadBundles([bundle]);
      const results = executor.exec(patientSource);
      return results.patientResults[Object.keys(results.patientResults)[0]];
    });
    resolve(results);
  });
}

function getLibrary(release) {
  switch(release) {
    case 2:
      return new cql.Library(dstu2FactorsELM, new cql.Repository({
        CDSConnectCommonsForFHIRv102: dstu2CommonsELM,
        FHIRHelpers: dstu2HelpersELM
      }));
    case 4:
      return new cql.Library(r4FactorsELM, new cql.Repository({
        CDSConnectCommonsForFHIRv401: r4CommonsELM,
        FHIRHelpers: r4HelpersELM
      }));
    default:
      throw new Error('Only FHIR DSTU2 and FHIR R4 servers are supported');
  }
}

function getPatientSource(release) {
  switch(release) {
    case 2:
      return cqlfhir.PatientSource.FHIRv102();
    case 4:
      return cqlfhir.PatientSource.FHIRv401();
    default:
      throw new Error('Only FHIR DSTU2 and FHIR R4 servers are supported');
  }
}

function doSearch(client, release, type, collector) {
  const params = new URLSearchParams();
  updateSearchParams(params, release, type);

  const resources = [];
  const uri = `${type}?${params}`;
  return new Promise((resolve) => {
    const results = client.patient.request(uri, {
      pageLimit: 0, // unlimited pages
      onPage: processPage(uri, collector, resources)
    }).then(() => {
      return resources;
    }).catch((error) => {
      collector.push({ error: error, url: uri, type: type, data: error });
      // don't return the error as we want partial results if available
      // (and we don't want to halt the Promis.all that wraps this)
      return resources;
    });
    resolve(results);
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

function updateSearchParams(params, release, type) {
  // If this is for Epic, there are some specific modifications needed for the queries to work properly
  if (process.env.REACT_APP_EPIC_SUPPORTED_QUERIES
    && process.env.REACT_APP_EPIC_SUPPORTED_QUERIES.toLowerCase() === 'true') {
    if (release === 2) {
      switch (type) {
        case 'Observation':
          // Epic requires you to specify a category or code search parameter, so search on all categories
          params.set('category', [
            'social-history', 'vital-signs', 'imaging', 'laboratory', 'procedure', 'survey', 'exam', 'therapy'
          ].join(','));
          break;
        case 'MedicationOrder':
          // Epic returns only active meds by default, so we need to specifically ask for other types
          // NOTE: purposefully omitting entered-in-error
          params.set('status', ['active', 'on-hold', 'completed', 'stopped', 'draft'].join(','));
          break;
        case 'MedicationStatement':
          // Epic returns only active meds by default, so we need to specifically ask for other types
          // NOTE: purposefully omitting entered-in-error
          params.set('status', ['active', 'completed', 'intended'].join(','));
          break;
        default:
          //nothing
      }
    } else if (release === 4) {
      // NOTE: Epic doesn't currently support R4, but assuming R4 versions of Epic would need this
      switch (type) {
        case 'Observation':
          // Epic requires you to specify a category or code search parameter, so search on all categories
          params.set('category', [
            'social-history', 'vital-signs', 'imaging', 'laboratory', 'procedure', 'survey', 'exam', 'therapy',
            'activity'
          ].join(','));
          break;
        case 'MedicationRequest':
          // Epic returns only active meds by default, so we need to specifically ask for other types
          // NOTE: purposefully omitting entered-in-error
          params.set('status', [
            'active', 'on-hold', 'cancelled', 'completed', 'stopped', 'draft', 'unknown'
          ].join(','));
          break;
        case 'MedicationStatement':
          // Epic returns only active meds by default, so we need to specifically ask for other types
          // NOTE: purposefully omitting entered-in-error and not-taken
          params.set('status', [
            'active', 'completed', 'intended', 'stopped', 'on-hold', 'unknown'
          ].join(','));
          break;
        default:
          //nothing
      }
    }
  }
}

export default executeELM;
