import React from 'react';

export const GetGist = ({queryServer, fetchGistList}) => {
    <div>
        <button data-url="git-gist-you-rang" onClick={queryServer}>Ring Git Gist</button>
        <button data-url="git-gist-get-gist-list" onClick={queryServer}> Get Gist List</button>
    </div>
};