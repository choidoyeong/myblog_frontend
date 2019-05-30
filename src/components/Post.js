import React, { Component } from 'react';
import './Post.css';
import axios from 'axios';
import { request } from 'http';

class Post extends Component {

    state = {
        post: {},
        opinions: []
    }

    componentWillMount() {
        const {match} = this.props;
        axios.get('http://localhost:8000/posts/'+match.params.id+'/').then((response) => {
            this.setState({
              post: response.data
            })
        })
        axios.get('http://localhost:8000/posts/'+match.params.id+'/opinions/').then((response) => {
            this.setState({
                opinions: response.data
            })
        })
    }

    render() {
        const {post, opinions} = this.state;
        const {post_title, post_content, category, like} = post;
        const opinionlist = opinions.map(
            ({user, opinion_content, id}) => (
                <div id={id} key={id} className="opinion">
                    <b>{user}</b><hr/>
                    {opinion_content}
                </div>
            ))
        return (
            <div className="post">
                <div className="title">
                    <h1>{post_title}</h1>
                </div>
                <div className="content">
                    {post_content}
                </div>
                <h2>Opinions</h2>
                {opinionlist}
            </div>
        )
    }
}

export default Post;