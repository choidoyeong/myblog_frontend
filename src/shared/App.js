import React, { Component } from 'react';
import MainTemplate from '../components/MainTemplate';
import Post from 'components/Post';
import Header from 'components/Header';
import PostList from 'components/PostList';
import { Route, Switch } from 'react-router-dom';
import CategoryList from 'components/CategoryList';
import './App.css'

class App extends Component {

  render() {
    return (
    <div>
      <Header/>
      <CategoryList/>
      <Switch>
        <Route path="/categorys/:id" component={PostList} />
        <Route exact path="/" component={PostList} />
      </Switch>
      <Route path="/posts/:id" component={Post} />
    </div>
    );
  }
}

export default App;
