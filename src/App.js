import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a react app</h1>
            </div>
            //This is javascript, not html.
            //React.createElement("div", {className: 'App'},
            //    React.createElement("h1", null, "Hi, I\'m a React App!"))
        )
    }
}

export default App;
