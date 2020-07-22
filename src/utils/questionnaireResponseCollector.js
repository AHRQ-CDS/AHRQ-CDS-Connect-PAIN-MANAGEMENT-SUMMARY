import FHIR from "fhirclient";

function collectQuestionnaireResponses(qrCollector){
    let client;
    let  obsCollector = [];
    let rawQRCollector =[]
    FHIR.oauth2.ready().then((clientArg) => {
        client = clientArg;

        return client;
    })
    .then((client) => {
        client.patient.request('Observation', {
            pageLimit: 0, // unlimited pages
            onPage: processPage(obsCollector)
        })
        .then((response) => {
            client.patient.request('QuestionnaireResponse', {
                pageLimit: 0, // unlimited pages
                onPage: processPage(rawQRCollector)
            })
            .then((response) =>{
                collectObsQR(obsCollector, rawQRCollector, qrCollector);
                console.log(qrCollector);
            });
        });
    });
}

function collectObsQR(obsCollector, rawQRCollector, qrCollector){
    obsCollector.forEach(entry => {
        if(entry.resource.category &&
            entry.resource.category[0].coding &&
            entry.resource.category[0].coding[0].system === 'http://hl7.org/fhir/observation-category') {
            let code = entry.resource.category[0].coding[0].code;
            if (code === 'survey') {
                if (entry.resource.extension &&
                    entry.resource.extension[0] &&
                    entry.resource.extension[0].url === 'http://hl7.org/fhir/uv/sdc/StructureDefinition/derivedFromLinkId') {
                    let linkId = entry.resource.extension[0].valueString;
                    let date = entry.resource.effectiveDateTime;
                    let question;
                    let answer;
                    if(entry.resource.valueQuantity){
                        answer = entry.resource.valueQuantity;
                    }else if(entry.resource.valueBoolean){
                        answer = entry.resource.valueBoolean.toString();
                    }else if(entry.resource.valueString){
                        answer = entry.resource.valueString;
                    }else if(entry.resource.valueCodeableConcept){
                        answer = entry.resource.valueCodeableConcept.coding[0].display;
                    }
                    let reference = entry.resource.derivedFrom[0].reference;
                    let qrId = reference.substr(reference.lastIndexOf('/') + 1, reference.length);
                    rawQRCollector.forEach(entry =>{
                        if(entry.resource.id === qrId){
                            entry.resource.item.forEach(item =>{
                                if(item.linkId === linkId){
                                    question = item.text;
                                }
                            });
                        }
                    });

                    if(question) {
                        qrCollector.push({
                            answer: answer,
                            question: question,
                            date: date,
                            linkId: linkId
                        })
                    }
                }
            }
        }
    });
}

function processPage(collector){
    return (bundle) => {
        if(bundle.entry) {
            bundle.entry.forEach(entry => {
                collector.push(entry);
            });
        }
    }
}
//  go through Observations inside this.state.collector[Observation].data.entry.
//  get QuestionnaireResponse linked from entry[item].resource.derivedFrom.reference
//  get question text found in QuestionnaireResponse.item[extension.valueString(LinkId)].text
//  get answer from observation.valueString/valueBoolean/valueCoding
export default collectQuestionnaireResponses;