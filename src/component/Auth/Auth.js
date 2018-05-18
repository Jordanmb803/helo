import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            profile_picture: "https://robohash.org/",
            user: {},
            redirect: false
        }
        this.registerUser = this.registerUser.bind(this)
    }

    registerUser(){
        const { username, password, profile_picture } = this.state
        console.log(username, password, profile_picture)
        axios.post('/register', {username, password, profile_picture}).then(res => {
            this.setState({
                user: res.data,
                redirect: true
            })
        }) 
    }

    render() {
        if (this.state.redirect){
            return <Redirect to = "/dashboard"/>
        }

        console.log(this.state)
        return (
            <div>
                <div>
                    <input onChange={e => this.setState({ username: e.target.value })} />
                    <input onChange={e => this.setState({ password: e.target.value })} />
                </div>
                <div>
                    <button>Login</button>
                    <button onClick={() => this.registerUser()}>Register</button>
                </div>
            </div>

        )
    }
}

export default Auth;