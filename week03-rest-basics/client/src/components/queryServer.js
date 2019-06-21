import React from 'react';

export queryServer = event => {
	console.log("In queryServer.");
        const that = this;

        fetch(event.target.dataset.url)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);

                that.setState(foo => json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };






