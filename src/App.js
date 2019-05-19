import React, { Component } from 'react';
import MainTemplate from './components/MainTemplate';
import Header from './components/Header';
import PostList from './components/PostList';
import axios from 'axios';

class App extends Component {
  
  state = {
    posts: [{}]
  }

  componentWillMount() {
    axios.get('http://localhost:8000/posts/').then((response) => {
        this.setState({
            posts: response.data
        })
    })
  }

  render() {
    const {posts} = this.state;
    return (
    <MainTemplate header={<Header />}>
      <PostList posts={posts} />
    </MainTemplate>
    );
  }
}

export default App;
