import React from 'react';
import { queryServer } from './queryServer';

const Foo = () => {
    return (
        <div>
            <button data-url="/test-routes/foo" onClick={queryServer}>
                Test Foo Route
            </button>
        </div>
    );
};

export default Foo;
