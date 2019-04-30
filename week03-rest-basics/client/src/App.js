import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      file: 'unknown',
      result: 'unknown',
      status: 'unknown'
    };
  }

  queryServer = () => {
    const that = this;
    fetch('/test-routes/foo')
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          console.log('parsed json', json);
          that.setState(foo => (json));
        })
        .catch(function(ex) {
          console.log('parsing failed, URL bad, network down, or similar', ex);
        });
  };

  render() {
    return (
        <div className="App">
          <ElfHeader/>

          <p className="App-intro">
            state: {this.state.status} file: {this.state.file}
          </p>

            <p className="App-intro">
                result: {this.state.result} server: {this.state.server}
            </p>
          <button onClick={this.queryServer}>Bar</button>

          <TestRoutes queryServer = {this.queryServer}/>
          <Qux queryServer = {this.queryServer}/>

          <GetUser queryServer = {this.queryServer}/>

          <GetGist queryServer={this.queryServer} fetchGistList={this.fetchGistList}/>
        </div>
    );
  }
}

export default App;