import React, { Component } from 'react';

class App extends Component {
  render() {
    // Injected by React Router
    const { props } = this;
    return (
      <div>
        <h1> Welcome to LolQueen! </h1>
        {props.children}
      </div>
    );
  }
}

export default App;
