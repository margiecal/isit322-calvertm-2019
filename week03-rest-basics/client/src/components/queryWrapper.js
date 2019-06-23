import React from 'react';
import {queryServer} from './queryServer';
import {appInit} from './app-init';


const queryWrapper = (event, props) => {



    queryServer(event).then(response => {

        let appInit = {appInit};
        console.log("App Init message 1" + appInit.message);
        appInit.message = response.message;
        console.log("App Init message 2" + appInit.message);
})};

export { queryWrapper };
