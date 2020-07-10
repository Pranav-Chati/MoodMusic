import React from 'react';
import LoginPage from './LoginPage';


class StartPage extends React.Component {
    constructor() {
        super();
        this.state={
            showButton:true,
            showLogin:false,
        }

        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.setState({
            showButton:false,
            showLogin:true,
        })
        
    }

    render() {
        return(
            <div className={"sp-div"}>
                {/*Add lottie animation here*/}
                {this.state.showButton && <button href="/login" class="btn btn-primary" onClick={this.handleClick}>Continue</button>}
                {this.state.showLogin && <LoginPage/>}
            </div>
        )
    }
}

export default StartPage;
