import React from 'react';

class HomePage extends React.Component {
    constructor() {
        super();
        this.state={
            auth_token: this.props.match.params.authentication_key,

        }
    }

    render() {
        return (
            <div>
                <button onClick={()=> {
                    console.log(this.state.auth_token)
                }}>Home Page with Form</button>

                <form>
                    <label>
                        Hello
                    </label>
                </form>
            </div>
        )
    }
}

export default HomePage;