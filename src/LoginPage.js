import React from 'react';

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
                    <h2>Hello World</h2>
                    <br/>
                    <input type={"submit"} value={"Submit"}/>
                </form>
            </div>
        )
    }
}

export default LoginPage;