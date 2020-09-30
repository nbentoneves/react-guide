import React, {useEffect, useRef, useContext} from 'react';
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {

    const toggleButtonRef = useRef(null);

    const authContext = useContext(AuthContext);

    console.log("[Cockpit.js] render")

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

    //Executes when the component renders for the first time
    useEffect(() => {
        console.log("[Cockpit.js] useEffect")

        //Http request...
        //Run always when the component is update
        /*setTimeout(() => {
            alert('saved data to cloud!');
        }, 1000);*/

        toggleButtonRef.current.click();

        return () => {
            //It runs BEFORE the main useEffect function runs, but AFTER the (first) render cycle
            console.log("[Cockpit.js] clean up")
        };
    }, []);

    /**
     * Run after every render
     */
    useEffect(() => {
        console.log("[Cockpit.js] 2nd useEffect")
        return () => {
            //It runs BEFORE the main useEffect function runs, but AFTER the (first) render cycle
            console.log("[Cockpit.js] 2nd clean up")
        };
    });

    return (
        <div>
            <h1>{props.title}</h1>
            <p>This is really working!</p>
            <button
                ref={toggleButtonRef}
                style={style}
                onClick={props.clicked}>Toggle Persons
            </button>
            <button onClick={authContext.login}>Log in</button>

        </div>
    );
};

export default React.memo(Cockpit);