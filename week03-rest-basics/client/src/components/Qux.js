import React from 'react';
import { queryServer } from './queryServer';

const Qux = () => {
    return (
        <div>
            <button data-url="/qux-you-rang" onClick={queryServer}>
                Test Qux
            </button>
        </div>
    );
};

export default Qux;
