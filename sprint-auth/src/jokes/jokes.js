import React, { Component } from 'react';
import axios from 'axios';

class Jokes extends Component {
    state = {
        jokes: []
    }

    componentDidMount() {
        const endpoint = `http://localhost:3300/api/jokes`
        const token = localStorage.getItem('jwt');
        const requestOptions = {
            headers: {
                authorization: token
            }
        }

        axios
        .get(endpoint, requestOptions)
        .then(response => {
            this.setState({
                jokes: response.data
            })
        })
        .catch(() => console.log('error accessing jokes'))
    }

    render() {
        return (
            <>
            <h2>DAD JOKES!</h2>
            <div className="joke-holder">
                {this.state.jokes.map(joke => (
                    <div key={joke.id} className="joke-div">
                    {joke.joke}
                    </div>
                ))}
            </div>
            </>
        )
    }
}

export default Jokes;