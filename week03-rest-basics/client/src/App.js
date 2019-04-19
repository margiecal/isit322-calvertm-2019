import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      file: 'unknown',
      result: 'unknown',
      status: 'unknown',
      server: 'unknown'
    };
  }

  queryServer = () => {
    const that = this;
      fetch(event.target.dataset.url)
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
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to React</h2>
          </div>

          <p className="App-intro">
            state: {this.state.status} file: {this.state.file}
          </p>

            <button data-url="/test-routes/foo" onClick={this.queryServer}>Test Foo Route</button>

        </div>
    );
  }
}

export default App;