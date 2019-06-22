import React from 'react';
import { queryServer } from './queryServer';
import { queryWrapper} from './queryWrapper';
import App from './App';

const Foo = () => {
    return (
        <div>
            <button data-url="/test-routes/foo" onClick={queryServer}>
                Test Foo Route
            </button>
            <button data-url="/test-routes/foo" onClick={queryWrapper}>
                Test Foo Route Wrapper
            </button>
        </div>
    );
};

export default Foo;
