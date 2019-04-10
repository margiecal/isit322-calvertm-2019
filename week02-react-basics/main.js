import React from 'react';
import ReactDOM from 'react-dom';
import ReactBasics from './ReactBasics';
import {ReactBasicsStateless, ReactBasicsFoo} from './ReactBasicsStateless';

ReactDOM.render(
    <div>
    <ReactBasics/>
    <ReactBasicsFoo/>
    <ReactBasicsStateless/></div>,
    document.getElementById('root')
);