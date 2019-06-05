import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    state = {
        username: '',
        password: '',
        redirect: false,
    }
    
    handleUsernameChange = (e) => {
        this.setState({
          username: e.target.value
        });
    }
    
    handlePasswordChange = (e) => {
        this.setState({
          password: e.target.value
        });
    }

    handleLogin = () => {
        axios.post('http://localhost:8000/login/', {'username':this.state.username, 'password':this.state.password})
        .then((response) => {
            sessionStorage.setItem('username', response.data.username)
            sessionStorage.setItem('user_id', response.data.user_id)
            sessionStorage.setItem('access', response.data.access)
            localStorage.setItem('refresh', response.data.refresh)
            this.setState({
                username: '',
                password: '',
            });
            this.props.changeLogin(true);
            this.setState({
                redirect: true
            })
        }).catch((error) => {
            alert(error.response.data.message)
        })
    }
    
    render () {

        const {
            username,
            password,
            redirect
        } = this.state;

        const {
            handlePasswordChange,
            handleUsernameChange,
            handleLogin
        } = this;

        if(redirect) {
            return <Redirect to="/" />
        }

        return(
            <div>
                <h1>Log In</h1>
                <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} /><br />
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} /><br />
                <button onClick={handleLogin}>Log In</button>
            </div>
        );
    }
}

export default Login;