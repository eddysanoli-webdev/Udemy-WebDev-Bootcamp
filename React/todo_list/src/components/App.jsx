import React, {useState} from 'react';

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

const App = () => {

    // =======================
    // Stateful variables:
    // - newItem
    const [newItem, setNewItem] = useState("");
    const [list, setList] = useState(["An Item"]);

    // =======================
    // Handling Functions
    // (Functions for handling app interactions)

    // Text Input Change
    const handleTextChange = (event) => {

        // Get the new value from the text input
        const {value} = event.target;

        // Change the value of the stateful variable
        return setNewItem(value)
    }

    // "Add" Button Click
    const handleBtnClick = (event) => {
        setList(prevValue => {

            // Add the new item to the list of tasks
            const newList = [...prevValue, newItem];

            // Reset the new item text input
            setNewItem("");

            // Return the new list
            return newList;
        });
    }

    // =======================
    // Render Output

    return (
        <div className="container">

            {/* Heading */}
            <div className="heading">
                <h1>To-Do List</h1>
            </div>

            {/* Form */}
            <div className="form">
                <input 
                    type="text"
                    onChange={ handleTextChange }
                    value={newItem}
                />
                <button onClick={ handleBtnClick }>
                    <span>Add</span>
                </button>
            </div>

            {/* List */}
            <div>
                <ul>

                    {/* Iterate through every todo list item and render it */}
                    {list.map(listItem => <li>{ listItem }</li>)}
                    
                </ul>
            </div>
        </div>
    )
}

export default App;