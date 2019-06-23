import React from 'react';
//import { queryServer } from './queryServer';
import {queryWrapper} from './queryWrapper';


const Foo = () => {

    return (
        <div>
            <button data-url="/test-routes/foo" onClick={queryWrapper}>
                Test Foo Route
            </button>

        </div>

    );
};

export default Foo;
