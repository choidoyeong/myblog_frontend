import React, { Component } from 'react';
import Post from 'components/Post';
import Header from 'components/Header';
import PostList from 'components/PostList';
import Login from 'components/Login';
import { Route, Switch } from 'react-router-dom';
import CategoryList from 'components/CategoryList';
import './App.css'

class App extends Component {
  state = {
    login: false
  }

  changeLogin = (bool) => {
    this.setState({
      login: bool
    })
  }

  componentDidMount() {
    if(sessionStorage.getItem('username')){
      this.setState({
        login: true
      })
    }
  }

  render() {

    const {
      login
    } = this.state;

    const {
      changeLogin
    } = this;
    return (
    <div>
      <div className="header-wrapper">
        <Header login ={login} changeLogin={changeLogin}/>
      </div>
      <aside className="aside">
        <CategoryList/>
      </aside>
      <div className="main">
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route path="/categorys/:id" component={PostList} />
          <Route path="/posts/:id" component={Post} />
          <Route path="/login" render={() => (
            <Login  changeLogin={changeLogin}/>
          )} />
        </Switch>
      </div>
    </div>
    );
  }
}

export default App;
