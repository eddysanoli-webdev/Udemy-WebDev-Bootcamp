import React from 'react';
import Login from './Login';

const isLoggedIn = false;
const isRegistered = true;

// Get the current hour
const currentTime = new Date().getHours();

const App = () => {

    // Render "hello" if the user is logged with the ternary operator 
    // (condition ? true : false). The tern
    // (The operator must be used inside curly braces)
    return (
        <div className="container">
            { isLoggedIn ? <h1>Hello</h1> : <Login isRegistered = { isRegistered }/> }

            {/* We can use the AND operator to get a more compact version of
            the ternary operator. If the first argument is false, the second part doesnt
            show up. If it is true, then the second part is evaluated and shown. */}
            { currentTime > 12 && <h1>Why are you still working?</h1>}
        </div>
    );
    
}

export default App;