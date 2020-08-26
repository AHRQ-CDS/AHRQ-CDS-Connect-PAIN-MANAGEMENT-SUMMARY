export default function createPrefetch(collector, opioidLibraryNumber) {
    return Promise.all([getPrefetch(collector, opioidLibraryNumber)]);
}

async function getPrefetch(collector, opioidLibraryNumber) {
    let hookid;
    let newPrefetchStr;
    if(opioidLibraryNumber === 10){
        hookid = 'opioidcds-10-patient-view';
    }else if(opioidLibraryNumber === 11){
        hookid = 'opioidcds-11-patient-view';

    }
    await createItemList(collector, hookid)
        .then((itemsList) => {
            newPrefetchStr = createPrefetchObject(collector, itemsList);
            return newPrefetchStr;
        });
    return newPrefetchStr;
}

function createPrefetchObject(collector, itemsList) {
    let finalPrefetch = getHeader(collector[0]);
    if (itemsList){
        let index = 0;
        for (let [key, value] of Object.entries(itemsList)) {
            if(index > 0){
                finalPrefetch = finalPrefetch + ',';
            }
            index = index + 1;
            finalPrefetch = finalPrefetch + '"' + key + '":{"response": {"status": "200 OK"},"resourceType":"Bundle","entry":[' + value + ']}';
        }
    }
    finalPrefetch = finalPrefetch + '}}';
    return finalPrefetch;
}


function createItemList(collector, hookId) {
    let items = {};
    let url = process.env.REACT_APP_CDS_URL;
    return fetch(url, {
        method: 'GET',     // use GET for cds-services discovery call
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.text())
        .then(response => {
            let servicesJson = JSON.parse(response);
            servicesJson.services.forEach((service) => {
                if (service.id === hookId) {
                    let prefetch = service.prefetch;
                    collector.forEach(entry => {
                        let resourceType = entry.url.substring(entry.url.lastIndexOf('/') + 1, entry.url.indexOf('?'));
                        if (!resourceType.includes('Patient') && entry.data.entry) {
                            for (let [key, value] of Object.entries(prefetch)) {
                                if (key !== 'item1') {                         //handled in header
                                    if (value.includes(resourceType)) {
                                        entry.data.entry.forEach((dataEntry) => {
                                            if ((dataEntry.resource.code && value.includes(dataEntry.resource.code.coding[0].code + ',')) ||
                                                (dataEntry.resource.medicationCodeableConcept && value.includes(dataEntry.resource.medicationCodeableConcept.coding[0].code + ','))) {
                                                if (items[key]) {
                                                    items[key] = items[key] + ',' + JSON.stringify(dataEntry.resource);
                                                } else {
                                                    items[key] = JSON.stringify(dataEntry.resource);
                                                }
                                            }
                                        });
                                    }
                                }
                            }
                        }
                    });
                }
            });
            return items;
        });
}

function getHeader(pt) {
    let uuid = uuidv4();
    let fhirServer = process.env.REACT_APP_CDS_URL
        .substring(0, process.env.REACT_APP_CDS_URL.lastIndexOf('/')) + '/fhir';
    let prefetchStr = '{"hookInstance": "' + uuid + '","fhirServer": "' + fhirServer +'","hook": "patient-view","applyCql": true,"context": {"userId": "Practitioner/PainManager","patientId": "';
    return prefetchStr + pt.url + '"}, "prefetch": {"item1":' + JSON.stringify(pt.data) + ",";
}

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        // eslint-disable-next-line
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}