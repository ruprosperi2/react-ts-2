import React from "react";

type Props = {}

type State = { isToggleOn: boolean }

class Toogle extends React.Component <Props, State> {
    constructor(props: any) {
        super(props)

        this.state = {isToggleOn: true}

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toogle;