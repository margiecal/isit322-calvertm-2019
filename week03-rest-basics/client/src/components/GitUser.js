import React from 'react';
import { queryServer } from './queryServer';

const GitUser = () => {
    return (
        <div>
            <button data-url="/git-user-you-rang" onClick={queryServer}>
                Test Git User
            </button>
        </div>
    );
};

export default GitUser;
