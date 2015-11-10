import React, { Component } from 'react';

class App extends Component {
  render() {
    const { props } = this;
    return (
      <div>
        {props.children}
      </div>
    );
  }
}

export default App;
