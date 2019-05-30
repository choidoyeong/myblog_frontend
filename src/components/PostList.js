import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './PostList.css'

class PostList extends Component {
    
    state = {
        posts: []
    }
    
    componentWillMount() {
        const { match } = this.props;
        let url = match.params.id ? `http://localhost:8000/categorys/${match.params.id}/`: 'http://localhost:8000/posts/' 
        axios.get(url).then((response) => {
          this.setState({
            posts: response.data
          })
        })
    }
    
    componentWillReceiveProps(nextProps) {
        const { match } = nextProps;
        let url = match.params.id ? `http://localhost:8000/categorys/${match.params.id}/`: 'http://localhost:8000/posts/' 
        axios.get(url).then((response) => {
          this.setState({
            posts: response.data
          })
        })
    }
    render() {
        
        const { posts } = this.state;

        const postList = posts.map(
            ({id, post_title}) => (
                <div className = "template" id = {id} key = {id}>
                    <Link className="post-link" to={`/posts/${id}`}>
                        {post_title}
                    </Link>
                </div>
            )
        );
        return(
            <div className="postWrapper">
                <h2>Posts</h2>
                <div>
                {postList}
                </div>
            </div>
        );
    }
}

export default PostList;