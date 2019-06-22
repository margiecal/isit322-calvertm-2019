import React from 'react';
import { queryServer } from './queryServer';

const Markdown = () => {
    return (
        <div>
            <button data-url="/markdown-you-rang" onClick={queryServer}>
                Test Markdown
            </button>
        </div>
    );
};

export default Markdown;
