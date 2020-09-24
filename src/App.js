import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

/**
 * 38. Manage information inside component you should use state, changing state the react will rerender the DOM
 * ---
 * 40. When you want to handle a function you must not have add the () in the end of the function, otherwise you will call
 * the function when the react render the DOM. You can see at react documentation which events are supported
 * ---
 * 44. Using useState() in hooks, the state isn't merge when you call the set method.
 */
const app = props => {

    const [persons, setPersons] = useState({
        persons: [
            {name: 'Nuno', age: 28},
            {name: 'Ines', age: 29},
            {name: 'Sara', age: 26}
        ],
        otherState: "some other value"
    });

    const [other, setOther] = useState("some other value")

    /**
     * 46. A why to passing method references between components
     * Using the switchNameHandler(name) can not be efficient
     */
    const switchNameHandler = (newName) => {
        //console.log("Was clicked!");
        // DON'T DO THIS: persons.persons[0].name = "Maximilian";
        setPersons({
            persons: [
                {name: newName, age: 28},
                {name: 'Ines', age: 29},
                {name: 'Sara', age: 27}
            ]
        });
    };

    const nameChangedHandler = (event) => {
        setPersons({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 29},
                {name: 'Sara', age: 27}
            ]
        });
    }

    /**
     * 49. Inline style
     */
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    return (
        <div className="App">
            <h1>Hi, I'm a react app</h1>
            <p>This is really working!</p>
            <button
                style={style}
                onClick={() => switchNameHandler("Maximiliam")}>Swith Name</button>
            <Person
                name={persons.persons[0].name}
                age={persons.persons[0].age}/>
            <Person
                name={persons.persons[1].name}
                age={persons.persons[1].age}
                click={switchNameHandler.bind(this, "Maximiliam")}
                changed={nameChangedHandler}>My Hobbies: Racing</Person>
            <Person
                name={persons.persons[2].name}
                age={persons.persons[2].age}/>
        </div>
        //This is javascript (JSX), not html.
        //React.createElement("div", {className: 'App'}, React.createElement("h1", null, "Hi, I\'m a React App!"))
    )
}

export default app;

/*
state = {
    persons: [
        {name: 'Nuno', age: 28},
        {name: 'Ines', age: 29},
        {name: 'Sara', age: 26}
    ],
    otherState: "some other value"
}

switchNameHandler = () => {
    //console.log("Was clicked!");
    // DON'T DO THIS: persons.persons[0].name = "Maximilian";
    this.setState({
        persons: [
            {name: 'Maximilian', age: 28},
            {name: 'Ines', age: 29},
            {name: 'Sara', age: 27}
        ]
    })
}*/