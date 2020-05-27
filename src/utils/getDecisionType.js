

export default function getDecisionType() {
    fetch(`${process.env.PUBLIC_URL}/config.json`)
        .then(response => response.json())
        .then(config => {
            // Only provide analytics if the endpoint has been set
            if (config.decisionComponent) {
                return config.decisionComponent;
            }
        })
        .catch(err => {
            console.log(err)
        });
    }