import React, {useState} from 'react';

const InputArea = (props) => {

    // Stateful Item Text
    const [newItem, setNewItem] = useState("");

    // Text Input Change
    const handleTextChange = (event) => {

        // Get the new value from the text input
        const {value} = event.target;

        // Change the value of the stateful variable
        return setNewItem(value)
    }
    
    // Render Page
    return (
        <div className="form">
            <input
                type="text"
                onChange={handleTextChange}
                value={newItem}
            />

            <button onClick={ () => {
                // Add element to list
                props.onBtnClick(newItem);

                // Reset the new item text input
                setNewItem("");
            }}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;