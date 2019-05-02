import React from 'react';
import ReactDOM from 'react-dom';

class Go extends React.Component {

    constructor(props) {
        super(props);
        this.state = {result: 'unknown'};
    }

    setFooData = (json) => {
        console.log('parsed json', json);
        this.setState(json);
    };

    elfQuery = (url, setFooData, event) => {
        console.log(event.target);
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then((json) => {
                this.setFooData(json);
            })
            .catch(function (ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    render() {
        return (
            <div>
                <h1>React and Jest</h1>

                <button
                    id='foobar'
                    onClick={(event) => this.elfQuery('/foo', this.setFooData, event)}>
                    Query Foo
                </button>
                <button
                    id='barbar'
                    onClick={(event) => this.elfQuery('/bar', this.setFooData, event)}>
                    Query Bar
                </button>
                <p>Hello {this.state.result}</p>
            </div>
        );
    }
}

window.onload = function () {

    ReactDOM.render(
        <Go/>,
        document.getElementById('root')
    )
};

export default Go;