import React, { Component } from 'react';

class App extends Component {
  render() {
    // Injected by React Router
    const { props } = this;
    return (
      <div>
        {props.children}
      </div>
    );
  }
}

export default App;
