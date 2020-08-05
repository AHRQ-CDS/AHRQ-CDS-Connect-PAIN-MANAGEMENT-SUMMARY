export default function createPrefetch(collector, opioidLibraryNumber) {
    return Promise.all([getPrefetch(collector, opioidLibraryNumber)]);
}

function getPrefetch(collector, opioidLibraryNumber) {
    let hookid;
    if(opioidLibraryNumber === 10){
        hookid = 'opioidcds-10-patient-view';
    }else if(opioidLibraryNumber === 11){
        hookid = 'opioidcds-11-patient-view';

    }
    createItemList(collector, hookid)
        .then((itemsList) => {
            let prefetchStr = getHeader(collector[0]);
            let newPrefetchStr = createPrefetchObject(prefetchStr, itemsList);
            return newPrefetchStr;
        });
}

function createPrefetchObject(prefetchStr, itemsList) {
    let finalPrefetch = prefetchStr;
    if (itemsList){
        for (let [key, value] of Object.entries(itemsList)) {
            finalPrefetch = prefetchStr + '"' + key + '":{"resourceType":"Bundle","entry":[' + value + ']}';
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
                        if (!entry.url.includes('Patient') && entry.data.entry) {
                            let resourceType = entry.url.substring(entry.url.lastIndexOf('/') + 1, entry.url.indexOf('?'));
                            for (let [key, value] of Object.entries(prefetch)) {
                                if (key !== 'item1') {                         //handled in header
                                    if (value.includes(resourceType)) {
                                        entry.data.entry.forEach((dataEntry) => {
                                            if ((dataEntry.resource.code && value.includes(dataEntry.resource.code + ',')) ||
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
    let prefetchStr = '{"hookInstance": "' + uuid + '","fhirServer": "' + process.env.REACT_APP_CDS_URL +'","hook": "patient-view","applyCql": true,"context": {"userId": "Practitioner/PainManager","patientId": "';
    return prefetchStr + pt.url + '"}, "prefetch": {"item1":' + JSON.stringify(pt.data) + ",";
}

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        // eslint-disable-next-line
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}