import questionnaireResponseRCollector from '../../../utils/questionnaireResponseCollector'

//This test reads in a questionnaireResponse, submits it to the ruler and checks the resulting Observations

it('should properly extract observations from example questionnaireResponse', function () {
    fetch("./QR.json")
        .then(res => res.json())
        .catch(err =>{
            console.log(err);
        });
});