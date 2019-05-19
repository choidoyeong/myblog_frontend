import React, { Component } from 'react';
import './Post.css'

class Post extends Component {

    render() {
        const {title, content, category, like} = this.props
        return (
            <div className="post">
                <div className="title">
                    {title}
                </div>
                <div className="content">
                    {content}
                </div>
            </div>
        )
    }
}

export default Post;