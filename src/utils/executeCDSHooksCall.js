import createPrefetch from './prefetchCreator';

const opioidLibraryNumber = 11;

    export default function doCDSCall(collector) {
        return Promise.all([getCDSValues(collector)])
    }

    function getCDSValues(collector) {
        let prefetchData = createPrefetch(collector);
        let url = createURL();
        return fetch(url, {
                method: 'POST',     // use GET for cds-services discovery call
                body: prefetchData, // string or object  !!put back in for POST operation
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.text())
            .then(response => {
                console.log(response);
                return JSON.parse(response);})
            .then(response => {
                let returnText = '';
                if(response.cards.length > 0) {
                    returnText = response.cards[0].summary;
                    if (response.cards[0].detail) {
                        returnText += '.     ' + response.cards[0].detail;
                    }
                }
                return returnText;
            })
            .catch(error => {
            console.log(error);
            console.log("The call to the ruler failed.");
        });
    }

    function createURL(){
        if(opioidLibraryNumber === 10){
            return 'http://localhost:8080/cqf-ruler-dstu3/cds-services/opioidcds-10-patient-view';
        }
        if(opioidLibraryNumber === 11){
            return 'http://localhost:8080/cqf-ruler-dstu3/cds-services/opioidcds-11-patient-view'
        }
    }


//        let url = "http://ec2-54-149-75-236.us-west-2.compute.amazonaws.com:8080/ruleexecutor/cds-services/HIMSSCKDIdUrgentCareDR2";
//        let url = "https://fhir-org-cds-services.appspot.com/cds-service/patient-greeting";
//        let url = 'https://fhir.alphora.com/cqf-ruler/cds-services';
//        let url = 'http://localhost:8080/cqf-ruler-r4/cds-services/patient-greeting';
//        let url = 'https://fhir-org-cds-services.appspot.com/cds-services'
//        let url = "https://fhir-org-cds-services.appspot.com/cds-service/patient-greeting";
