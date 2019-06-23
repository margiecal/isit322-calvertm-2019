import React, { Component } from 'react';
import ElfHeader from './ElfHeader';
import Foo from './Foo';
import Qux from './Qux';
import GitGist from './GitGist';
import GitUser from './GitUser';
import Markdown from './Markdown';
import GitSocket from './GitSocket';
import '../css/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = props.appInit
    }

    render() {



        return (

            <div className="App">
                <ElfHeader />
                <p className="App-intro">
                    result: {this.state.result} server: {this.state.server}{' '}
                    message: {this.state.message}
                </p>
                <Foo />
                <Qux />
                <GitGist />
                <GitUser />
                <Markdown />
                <GitSocket />
            </div>
        );
    }
}

export default App;
