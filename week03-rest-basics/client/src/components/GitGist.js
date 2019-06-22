import React from 'react';
import { queryServer } from './queryServer';

const GitGist = () => {
    return (
        <div>
            <button data-url="/git-gist-you-rang" onClick={queryServer}>
                Test Git Gist
            </button>
        </div>
    );
};

export default GitGist;
