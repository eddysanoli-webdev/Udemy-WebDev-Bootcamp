import React, {useState} from 'react';
import ToDoItem from './ToDoItem';
import InputArea from './InputArea';

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

const App = () => {

    // =======================
    // Stateful variables
    const [list, setList] = useState(["An Item"]);

    // =======================
    // Handling Functions
    // (Functions for handling app interactions)

    // "Add" Button Click
    const handleBtnClick = (newItem) => {
        setList(prevValue => {

            // Add the new item to the list of tasks
            const newList = [...prevValue, newItem];

            // Return the new list
            return newList;
        });
    }

    // Delete To-Do List Item
    const deleteItem = (id) => {

        // Return all items, except the one that has the selected id
        setList(prevItems => {
            return prevItems.filter((item, index) => index !== id);
        })
    }

    // =======================
    // Render Output

    return (
        <div className="container">

            {/* Heading */}
            <div className="heading">
                <h1>To-Do List</h1>
            </div>

            {/* Input Area */}
            <InputArea onBtnClick={handleBtnClick}/>

            {/* List */}
            <div>
                <ul>

                    {/* Iterate through every todo list item and render it */}
                    {list.map((listItem, index) => {
                        return (
                            <ToDoItem
                                key={ index } 
                                id={ index }
                                listItem={ listItem }
                                onChecked={ deleteItem }
                            />
                        );
                    })}
                    
                </ul>
            </div>
        </div>
    )
}

export default App;