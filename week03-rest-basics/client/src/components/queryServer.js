const queryServer = event => {
    return new Promise((resolve, reject) => {
        console.log('In queryServer.');

        fetch(event.target.dataset.url)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                resolve(json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
                reject(ex);
            });
    });
};

export { queryServer };
