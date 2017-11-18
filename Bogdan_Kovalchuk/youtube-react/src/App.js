import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header.Component';
// import Aside from './components/aside/Aside.Component';
import Main from './pages/main/Main.Component';
// import Trending from './pages/Trending.Component';
// import Subscription from './pages/Subscriptions.Component';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          {/*<Aside/>*/}
          <Main/>
      </div>
    );
  }
}

export default App;
