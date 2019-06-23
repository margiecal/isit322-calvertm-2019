



    const changeState = (anyState,json) => {
        {
            anyState.result = json.result;
            anyState.server = json.server;
            anyState.message = json.message;
        }
    };






export {changeState};
