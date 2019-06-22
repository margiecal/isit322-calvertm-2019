import { queryServer } from './queryServer';


const queryWrapper = event => {
    let myResult = {
        result: 'unknown',
        server: 'unknown',
        message: 'unknown'
    };

    queryServer(event).then(response => {
        myResult.state = {
            result: response.result,
            server: response.server,
            message: response.message
        };
        console.log ("Query Wrapper Result state: " + myResult.state);
        return myResult.state;
    });
};



export { queryWrapper };