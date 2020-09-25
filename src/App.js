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
 * ---
 * 54. You can use a clean way to use conditions for dynamic content
 */
const app = props => {

    const [persons, setPersons] = useState([
        {id: 1, name: 'Nuno', age: 28},
        {id: 2, name: 'Ines', age: 29},
        {id: 3, name: 'Sara', age: 26}
    ]);

    const [showPersons, setShowPersons] = useState(false)

    const [other, setOther] = useState("some other value")

    /**
     * 46. A why to passing method references between components
     * Using the switchNameHandler(name) can not be efficient
     */
    const switchNameHandler = (event, id) => {
        //console.log("Was clicked!");
        // DON'T DO THIS: persons.persons[0].name = "Maximilian";
        /*setPersons({
            persons: [
                {id: 1, name: newName, age: 28},
                {id: 2, name: 'Ines', age: 29},
                {id: 3, name: 'Sara', age: 27}
            ]
        });*/

        //This will mutable the reference of persons[index]
        const personIndex = persons.findIndex(p => p.id === id);
        const personAux = {
            ...persons[personIndex]
        }
        personAux.name = event.target.value;

        const personsAux = [...persons];
        personsAux[personIndex] = personAux;
        setPersons(personsAux);

    };

    const deletePersonHandler = (personIndex) => {
        //58. Copy the object instead of using reference
        //const personsAux = persons.slice();
        const personsAux = [...persons];
        personsAux.splice(personIndex, 1);
        setPersons(personsAux);
        console.log(persons);
    }

    const togglePersonHandler = () => {
        setShowPersons(!showPersons)
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

    let personsContent = null;

    // 54. Clean way to handling why dynamic content
    if (showPersons) {
        personsContent =
            <div>
                {
                    persons.map((person, index) => {
                        return <Person
                            //Index not help react
                            key={person.id}
                            click={() => deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            changed={(event) => switchNameHandler(event, person.id)}/>
                    })
                }
            </div>
    }

    return (
        <div className="App">
            <h1>Hi, I'm a react app</h1>
            <p>This is really working!</p>
            <button
                style={style}
                onClick={togglePersonHandler}>Toggle Persons
            </button>
            {personsContent}
        </div>
        //This is javascript (JSX), not html.
        //React.createElement("div", {className: 'App'}, React.createElement("h1", null, "Hi, I\'m a React App!"))
    )
}

export default app;