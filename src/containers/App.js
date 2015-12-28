import React, { Component } from 'react';

class App extends Component {
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

export default App;
