import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import ElfDebugEnzyme from '../tests/ElfDebugEnzyme';
import { configure, shallow } from 'enzyme';
import GetGist from '../components/GetGist';

const elfDebugEnzyme = new ElfDebugEnzyme(false, 'App.test.js', true);
configure({ adapter: new Adapter() });

describe('Sanity GetGist Tests', () => {

    it('proves we can run a test', () => {
        expect(true).toBe(true);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <GetGist
                queryServer={() => {}}
                fetchGistList={() => {}}
                result={'success'}
                gistList={[{ id: 3 }]}
            />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('checks that getGist is a function', () => {
        expect(typeof GetGist).toBe('function');
    });
});
