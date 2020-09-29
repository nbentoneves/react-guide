import React, {useEffect} from 'react';

const Cockpit = (props) => {

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

    useEffect(() => {
        console.log("[Cockpit.js] useEffect")

        //Http request...
        //Run always when the component is update
        setTimeout(() => {
            alert('saved data to cloud!');
        }, 1000);

        return () => {
            //It runs BEFORE the main useEffect function runs, but AFTER the (first) render cycle
            console.log("[Cockpit.js] clean up")
        };
    }, []);

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
                style={style}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
};

export default React.memo(Cockpit);