import React, { Component } from 'react';
import Post from './Post'

class PostList extends Component {
    render() {
        const {posts} = this.props;
        const postList = posts.map(
            ({id, post_title, post_content, category, like}) => (
                <Post
                    id = {id}
                    title = {post_title}
                    content = {post_content}
                    category = {category}
                    like = {like}
                    key = {id}
                />
            )
        );
        return(
            <div>
                {postList}
            </div>
        );
    }
}

export default PostList;