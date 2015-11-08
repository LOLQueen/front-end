import React, { Component } from 'react';

class App extends Component {
  render() {
    // Injected by React Router
    const { props } = this;
    return (
      <div style={styles}>
        {props.children}
      </div>
    );
  }
}

const styles = {
  backgroundImage: 'url("./src/assets/summoner-page.jpg")',
  backgroundSize: 'cover',
  minHeight: '100%',
};

export default App;
