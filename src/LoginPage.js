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

        var querystring = require('querystring');
        var scope = 'user-read-private user-read-email';
        const params = new URLSearchParams(window.location.search);


        const CREDENTIAL_ID = "059bd8a6413444029e2d071dd6f1e1c7";
        const secret_id = "c3c76b36dd3d43c5a35b5d2a79f7a1e8";




                window.location.replace('https://accounts.spotify.com/authorize?' +
                  querystring.stringify({
                    response_type: 'code',
                    client_id: CREDENTIAL_ID,
                    scope: scope,
                    redirect_uri: 'http://localhost:3000/',
                    state: '34fFs29kd09'
                  }));

                  var code = params.get('code');

                  const data1={
                    grant_type:"authorization_code",
                    code: code,
                    redirect_uri: 'http://localhost:3000/'
                  };
                  const othepram={
                    headers:{
                      'Authorization': 'Basic ' + (new Buffer(CREDENTIAL_ID + ':' + secret_id).toString('base64'))
                    },
                    body: data1,
                    method: "POST"

                  };
                  fetch('https://accounts.spotify.com/api/token', othepram)
                  .then(response =>{console.log(response.json())})
                  .catch(error=>console.log(error))
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
