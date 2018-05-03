import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pain Management Factors</h1>
        </header>

        {this.props.children}
      </div>
    );
  }
}
