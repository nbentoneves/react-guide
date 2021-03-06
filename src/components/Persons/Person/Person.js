import React, {Component} from 'react';
import './Person.css';
import withClass from "../../../hoc/withClass";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

/**
 * This is a functional component (also referred to as "presentational", "stateless")
 * This using ES6 arrow function
 * Where also, you can use the class-based components
 *
 * ---
 * 36. Props: this is used to have a dynamic component, you can pass properties inside the component
 * ---
 * 37. You can get the "children" sent to the component using {props.children}
 * ---
 * 38. Manage information inside component you should use state (you can't use state in functional components)
 * ---
 */

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }

    static contextType = AuthContext

    componentDidMount() {
        this.inputElement.current.focus();
        console.log(this.context.authentication);
    }

    render() {

        console.log("[Person.js] render")

        //return <p>I'm a person and I am {Math.floor(Math.random() * 30)} old!</p>
        return (
            //You can use the Aux hoc component (high order component...advanced technique for reusing components
            <React.Fragment>
                {this.context.authentication ? <p>Autenthicated!</p> : <p>Please log in</p>}
                <div className="Person">
                    <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} old!</p>
                    <p>{this.props.children}</p>
                    <input ref={this.inputElement}
                           type="text"
                           onChange={this.props.changed}
                           value={this.props.name}/>
                </div>
                <div> Another DIV</div>
            </React.Fragment>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, "Person");