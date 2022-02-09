import React from "react";

type Props = {};

type State = { date: Date }

class Clock extends React.Component <Props, State> {
    timerId: any;

    constructor(props: any) {
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
}

export default Clock;