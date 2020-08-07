import createPrefetch from './prefetchCreator';

export default function executeExternalCDSCall(collector) {
    return Promise.all([getCDSValues(collector)])
}

async function getCDSValues(collector) {
    let returnText;
    let cards10 = ' ';
    let cards11 = ' ';
    await getValues(collector, 10)
        .then((response) => {
        cards10 = response;
        return response;
    });
    await getValues(collector, 11)
        .then((newResponse)=>{
            cards11 = newResponse;
            return newResponse;
        });
    returnText = cards10 + ',' + cards11;
    return returnText;
}

async function getValues(collector, opioidLibraryNumber) {
    let url = createURL(opioidLibraryNumber);
    let returnText = '';
    await createPrefetch(collector, opioidLibraryNumber)
        .then((prefetchData) => {
            return fetch(url, {
                method: 'POST',     // use GET for cds-services discovery call
                body: prefetchData, // string or object  !!put back in for POST operation
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {return response.text();})
                .then(response => {
                    console.log(response);
                    return JSON.parse(response);
                })
                .then(response => {
                    if (response.cards && response.cards.length > 0) {
                        returnText = response.cards[0].summary;
                        if (response.cards[0].detail) {
                            returnText += '.     ' + response.cards[0].detail;
                        }
                    } else {
                        returnText = response.cards;
                    }
                    return returnText;
                })
                .catch(error => {
                    console.log(error);
                    console.log("The call to the ruler failed.");
                });
        });
    return returnText;
}

function createURL(opioidLibraryNumber) {
    if (opioidLibraryNumber === 10) {
        return process.env.REACT_APP_CDS_URL + '/opioidcds-10-patient-view';
    }
    if (opioidLibraryNumber === 11) {
        return process.env.REACT_APP_CDS_URL + '/opioidcds-11-patient-view'
    }
}
