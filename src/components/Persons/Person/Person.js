import React from 'react';
import './Person.css';

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

const Person = (props) => {
    //return <p>I'm a person and I am {Math.floor(Math.random() * 30)} old!</p>
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Person;