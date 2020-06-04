function getPrefetch() {
    return Promise.all([getJsonFile()])
}

function getJsonFile() {
    return fetch("./prefetch.json")
        .then(res => res.json())
        .catch(err =>{
            console.log(err);
        });
}

export default getPrefetch;