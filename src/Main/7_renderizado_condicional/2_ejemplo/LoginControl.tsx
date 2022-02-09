import React from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

type Props = {}

type State = { isLoggedIn: boolean }

class LoginControl extends React.Component <Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {isLoggedIn: false}

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isLoggedIn: !prevState.isLoggedIn
        }));
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleClick}/>;
        } else {
            button = <LoginButton onClick={this.handleClick}/>
        }
        return (
            <div>
                {button}
            </div>
        );
    }
}

export default LoginControl;