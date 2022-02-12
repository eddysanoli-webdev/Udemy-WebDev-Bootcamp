import React, {useState} from 'react';

/*
==============
NOTES
==============

REACT HOOKS

React hooks must be used inside a functional component (inside a function, like "App" below)


DESTRUCTURING

Both objects and arrays can bes
cle destructured:
    - Array: [element1, element2] = array
    - Object: {key1, key2} = object

You can name each element in an array destructuring however you wish, however, in the case
of the object destructuring, the key must match the name of a key in the object perfectly.
If no match is found, a null value is returned. To give the variable a new alias, you can
use the following syntax

    {key1: alias1, key2: alias2} = object

You can also give the variable a default value by using

    {key1 = defaul1: alias, key2 = default2: alias2} = object

Its also possible to destructure nested objects

    {key1: {subfield1, subfield2}, key2: {subfield1, subfield2}} = object

==============
*/

const App = () => {

    // useState() alias.
    // First argument is the initial state. 
    // Returns: The value of a state and a function for updating the value
    // (Here we are using destructuring: Asigning each element of the array returned
    //  by useState() to a different variable)
    const [count, setCount] = useState(0);

    // Time state
    const [timer, setTimer] = useState(new Date().toLocaleTimeString());

    // Retrieve the time each second and write it to the timer state
    setInterval( () => {
        setTimer(new Date().toLocaleTimeString());
    }, 1000);

    return (
        <div className="container">

            <h2>Time</h2>
            <h1>{ timer }</h1>

            <br />
            <h2>Count</h2>
            <h1>{ count }</h1>

            {/* The onClick property calls the setCount function to update the value 
            of count in different ways depending on the button pressed. */}
            <button onClick = { () => setCount(count + 1) }>+</button>
            <button onClick = { () => setCount(count - 1) }>-</button>
        </div>
    );
}

export default App;