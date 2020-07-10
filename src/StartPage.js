import React from 'react';
import LoginPage from './LoginPage';


class StartPage extends React.Component {
    constructor() {
        super();

        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        window.location.assign("/login")
    }

    render() {
        return(
            <div className={"sp-div"}>
                {/*Add lottie animation here*/}
                <button onClick={this.handleClick}>Continue</button>
            </div>
        )
    }
}

export default StartPage;