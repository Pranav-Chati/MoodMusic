import React from 'react';
import axios from 'axios';

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        })
    }

    submitHandler(event) {
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);

        var scope = 'user-read-private user-read-email';
        const CREDENTIAL_ID = "059bd8a6413444029e2d071dd6f1e1c7"
        fetch('https://accounts.spotify.com/authorize?client_id=' + CREDENTIAL_ID +
            '&response_type=code&redirect_uri=www.google.com&state=34fFs29kd09&scope='
            + scope)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <h1>Spotify Login</h1>
                    <label>
                        Username:
                        <input type={"text"}
                               value={this.state.username}
                               name={"username"}
                               placeholder={"Username"}
                               onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input type={"text"}
                               value={this.state.password}
                               name={"password"}
                               placeholder={"Password"}
                               onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <input type={"submit"} value={"Submit"}/>
                </form>
            </div>
        )
    }
}

export default LoginPage;
