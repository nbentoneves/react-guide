import React, {Component} from "react";


class LifeCycle extends Component {

    constructor(props) {
        super(props);
        console.log("[LifeCycle.js] constructor");

        this.state = {
            msgFromState: "this is a message from state"
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("[LifeCycle.js] getDerivedStateFromProps", props, state)
        return state;
    }

    componentDidMount() {
        console.log("[LifeCycle.js] componentDidMount")
    }

    /*
        componentWillMount() {
            console.log("[LifeCycle.js] componentWillMount")
        }
    */

    render() {
        console.log("[LifeCycle.js] render")

        return (
            <p>{this.state.msgFromState}</p>
        )
    }

}

export default LifeCycle;