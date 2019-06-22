import React, { Component } from 'react';
import ElfHeader from "./ElfHeader";
import {queryServer} from "./queryServer";
import '../App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            result: 'unknown',
            server: 'unknown',
            message: 'unknown'
        };
    }

    queryWrapper = event => {
        queryServer(event).then(response => { this.setState(response)})
    };

    render() {
        return (
            <div className="App">
                <ElfHeader />
                <p className="App-intro">
                    result: {this.state.result} server: {this.state.server}{' '}
                    message: {this.state.message}
                </p>
                <button data-url="/test-routes/foo" onClick={this.queryWrapper}>
                    Test Foo Route
                </button>
                <button data-url="/qux-you-rang" onClick={this.queryWrapper}>
                    Test Qux
                </button>
                <button
                    data-url="/git-gist-you-rang"
                    onClick={this.queryWrapper}
                >
                    Test Git Gist
                </button>
                <button
                    data-url="/git-user-you-rang"
                    onClick={this.queryWrapper}
                >
                    Test Git User
                </button>
                <button
                    data-url="/markdown-you-rang"
                    onClick={this.queryWrapper}
                >
                    Test Markdown
                </button>
                <button
                    data-url="/git-socket-you-rang"
                    onClick={this.queryWrapper}
                >
                    Test Git Socket
                </button>
            </div>
        );
    }
}

export default App;
