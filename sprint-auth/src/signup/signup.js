import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
    state = {
        username: '',
        password: ''
    }
    handleChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const endpoint = 'http://localhost:3300/api/register';

        axios.post(endpoint, this.state)
        .then(() => {
            this.setState({
                username: '',
                password: ''
            })
            this.props.history.push('/')
        })
        .catch(() => console.log('error posting to register'))
    }

    render() {
        const makeInput = (name, type, placeholder) => (
            <input 
            name={name}
            value={this.state[name]}
            type={type}
            placeholder={placeholder}
            onChange={this.handleChange} 
            />
        )
        return (
            <>
            <h2>Signup</h2>
            <form onSubmit={this.handleSubmit}>
            {makeInput('username', 'text', 'username')}
            {makeInput('password', 'password', 'password')}
            <button onSubmit={this.handleSubmit}>Submit</button>
            </form>
            </>
        )
    }
}

export default Signup