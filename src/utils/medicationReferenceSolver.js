export default function medicationReferenceSolver(referenceURL) {
    return Promise.all([getMedicationCode(referenceURL)])
}

async function getMedicationCode(orgReferenceURL) {

    return fetch(orgReferenceURL, {
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