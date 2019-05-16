import React, { Component } from 'react';
import MainTemplate from './components/MainTemplate'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
    <MainTemplate header={<Header />}>
      bb
    </MainTemplate>
    );
  }
}

export default App;
