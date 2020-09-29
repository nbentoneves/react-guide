import React, {Component, PureComponent} from 'react';
import Person from "./Person/Person";

class Persons extends PureComponent {

    /*
        static getDerivedStateFromProps(props, state) {
            console.log("[Persons.js] getDerivedStateFromProps")
            return state;
        }
    */

    /*
        componentWillReceiveProps(nextProps, nextContext) {
            console.log("[Persons.js] componentWillReceiveProps", nextProps)
        }
    */

    /*
        shouldComponentUpdate(nextProps, nextState, nextContext) {
            console.log("[Persons.js] shouldComponentUpdate")
            //97. This compare the pointer (reference)
            if (nextProps.persons !== this.props.persons ||
                nextProps.changed !== this.props.changed ||
                nextProps.clicked !== this.props.clicked){
                return true;
            }
            return false;
        }
    */

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Persons.js] getSnapshotBeforeUpdate")
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[Persons.js] componentDidUpdate")
        console.log(snapshot)
    }

    componentWillUnmount() {
        console.log("[Persons.js] componentWillUnmount")
    }

    render() {

        console.log("[Persons.js] render")

        return this.props.persons.map((person, index) => {
            return <Person
                //Index not help react
                key={person.id}
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}/>
        });
    }
}

export default Persons;