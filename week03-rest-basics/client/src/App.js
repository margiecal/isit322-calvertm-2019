import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            result: 'unknown',
            server: 'unknown',
            message: 'unknown'
        };
    }

    queryServer = event => {
        const that = this;

        fetch(event.target.dataset.url)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);

                that.setState(foo => json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>

                <p className="App-intro">
                    result: {this.state.result} server: {this.state.server}{' '}
                    message: {this.state.message}
                </p>
                <button data-url="/test-routes/foo" onClick={this.queryServer}>
                    Test Foo Route
                </button>
                <button data-url="/qux-you-rang" onClick={this.queryServer}>
                    Test Qux
                </button>
                <button
                    data-url="/git-gist-you-rang"
                    onClick={this.queryServer}
                >
                    Test Git Gist
                </button>
                <button
                    data-url="/git-user-you-rang"
                    onClick={this.queryServer}
                >
                    Test Git User
                </button>
                <button
                    data-url="/markdown-you-rang"
                    onClick={this.queryServer}
                >
                    Test Markdown
                </button>
                <button
                    data-url="/git-socket-you-rang"
                    onClick={this.queryServer}
                >
                    Test Git Socket
                </button>
            </div>
        );
    }
}

export default App;
