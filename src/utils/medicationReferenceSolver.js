export default function medicationReferenceSolver(referenceURL) {
    return Promise.all([getMedicationCode(referenceURL)])
}

async function getMedicationCode(orgReferenceURL) {
    let referenceURL;
    if(orgReferenceURL.indexOf('http') < 0){
//        referenceURL = 'http://cqf-ruler.localhost/cqf-ruler-r4/fhir/' + orgReferenceURL;
        return  null;
    }
    return fetch(referenceURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(response) {
        console.log(response);
        return response.code;
    });
}