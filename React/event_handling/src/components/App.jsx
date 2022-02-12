import React, {useState} from 'react';

/*
==============
NOTES
==============

SPREAD OPERATOR
The elements in an array can be spreaded into its individual elements by using the spread
operator (...). For example, if you cant to add elements to an array, you can do:

    const array1 = ["a", "b", "c"]
    const array2 = ["d", "e", "f", ...array1]

    Result: array2 = ["d", "e", "f", "a", "b", "c"]

It can also be used inside objects

    const object1 = {prop1: "a", prop2: "b"}
    const object2 = {..object1, prop3: "c"}

    Result: object2 = {prop1: "a", prop2: "b", prop3: "c"}

==============

*/


const App = () => {

    // Stateful:
    //  - Contact info
    //  - Button style
    const [contact, setContact] = useState({ firstName: "", lastName: "", email: ""});
    const [btnStyle, setBtnStyle] = useState( {backgroundColor: 'white'} );

    // Function for handling input changes
    const handleInput = (event) => {
        
        // Use object destructuring to gather the name of the field
        // that changed, and the new value it has
        const {value, name} = event.target;

        // Change the value of the field that changed
        //  - Return a new object comprised of all the attributes from "prevValue"
        //  - Modify the field with the name "name" with the new value
        //  - Use square brackets around name to get the value of the variable and not only
        //    the string "name" for the key value pair. Only valid with Babel
        setContact(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        })
    }

    return (
        <div className="container">
            <h1>Hello { contact.firstName } { contact.lastName }</h1>
            <p>{ contact.email }</p>

            {/* 
            By default, forms in react cause the entire page to refresh.
            Use preventDefault() to prevent the page from reloading after submitting
            */}
            <form onSubmit={ event => event.preventDefault() }>

                {/* 
                CONTROLLED COMPONENTS
            
                    Get the value inside the input
                    - event: Metadata related to the text change
                    - target: Current input tag
                    - value: Value of the current input tag. Can also get things like 
                            "placeholder" and "type" 
                    
                    Its important to set the value of the tag manually to get both the state and
                    the real value of the input to be synced together.
                */}
                <input 
                    name="firstName"
                    type="text" 
                    placeholder="First Name" 
                    onChange={ handleInput }
                    value={ contact.firstName }
                />
                <input 
                    name="lastName"
                    type="text" 
                    placeholder="Last Name" 
                    onChange={ handleInput }
                    value={ contact.lastName }
                />
                <input 
                    name="email"
                    type="text" 
                    placeholder="Email" 
                    onChange={ handleInput }
                    value={ contact.email }
                />

                {/* Change button color on hover */}
                <button 
                    type="submit"
                    style = { btnStyle }
                    onMouseOver={ () => setBtnStyle({ backgroundColor: 'black' }) }
                    onMouseOut={ () => setBtnStyle({ backgroundColor: 'white' }) }
                >Submit</button>

            </form>
            
        </div>
    );
    
}

export default App;