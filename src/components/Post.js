import React, { Component } from 'react';
import './Post.css';
import axios from 'axios';

//axios.defaults.headers.common['Authorization'] = 'Bearer '+sessionStorage.getItem('access');
class Post extends Component {

    state = {
        post: {},
        opinions: [],
        input: ''
    }

    handleInputChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleInputOnclick = () => {
        const {opinions, post} = this.state;
        axios.post('http://localhost:8000/posts/'+post.id+'/opinions/',
        {  
            'opinion_content': this.state.input, 
            'user': sessionStorage.getItem('user_id'), 
            'post_content': 'aa' 
        },
        {
            headers: {'Authorization': 'Bearer '+sessionStorage.getItem('access')} 
        }
        ).then((response) => {
            this.setState({
                input: '',
                opinions: opinions.concat(response.data) 
            })
        })
    }

    componentDidMount() {
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
        const {post, opinions, input} = this.state;
        const {post_title, post_content, category, like} = post;
        const {handleInputChange, handleInputOnclick} = this;

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
                <div className="opinion-input">
                    <input type="text" placeholder="Opinion을 입력하시오." value={input} onChange={handleInputChange}/>
                    <div className="input-button" onClick={handleInputOnclick}>input</div>
                </div>
                <div className="opinions">
                {opinionlist}
                </div>
            </div>
        )
    }
}

export default Post;