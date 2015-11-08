import React, { Component } from 'react';

class App extends Component {
  render() {
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
  backgroundAttachment: 'fixed',
  minHeight: '100%',
};

export default App;
