import React, { Component } from 'react';
import '../style/App.css';
import Layout from "./Layout"

class App extends Component {
  render() {
    return (
      <div>
          <Layout
              Aside={<Layout/>}
              Main={<Layout/>}
          />
      </div>
    );
  }
}

export default App;
