import React from 'react';
import ReactDOM from 'react-dom';
import Go from './Go';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
configure({ adapter: new Adapter() });

describe('jest test', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Go />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<Go />);
        console.log(wrapper.debug());
        const welcome = <h1>React and Jest</h1>;
        console.log(wrapper.find('h1').debug());
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('setFooData renders result if passed good JSON data', () => {
        const wrapper = shallow(<Go />);
        console.log(wrapper.debug());
        const resultData = <p>Hello success-foo</p>
        wrapper.instance().setFooData({"result": "success-foo"});
        console.log(wrapper.find('p').debug());
        expect(wrapper.contains(resultData)).toEqual(true);
    });

});