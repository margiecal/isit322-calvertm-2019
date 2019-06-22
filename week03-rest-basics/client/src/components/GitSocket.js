import React from 'react';
import { queryServer } from './queryServer';

const GitSocket = () => {
    return (
        <div>
            <button data-url="/git-socket-you-rang" onClick={queryServer}>
                Test Git Socket
            </button>
        </div>
    );
};

export default GitSocket;
