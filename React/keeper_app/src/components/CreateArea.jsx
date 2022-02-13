import React, {useState} from 'react';

const CreateArea = (props) => {

    const [newItem, setNewItem] = useState({
        title: "",
        content: ""
    })

    const handleTextChange = (event) => {

        // Retrieve the name and value of the input that changed
        const {name, value} = event.target;

        // Get the previous attributes from the newItem object.
        // We modify the "name" field with the value stored in "value"
        setNewItem(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    return (
        <div>
            {/* Use preventDefault to avoid auto refreshing after submitting */}
            <form onSubmit={ event => event.preventDefault() }>

                {/*
                Text inputs: 
                    - On change, we set the corresponding property of the newItem object 
                    - Set the current value to the value of the state in order to remain consistent
                */}
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Title"
                    onChange={ handleTextChange }
                    value={ newItem.title }
                />
                <textarea 
                    name="content"
                    placeholder="Take a note..." 
                    rows="4"
                    onChange={ handleTextChange }
                    value={ newItem.content }
                ></textarea>

                {/* 
                Add Button: 
                    - Create a new object
                    - Add the new object to the item list
                    - Set both fields (title and content) to an empty string
                */}
                <button
                    onClick={ () => {
                        props.onAdd(newItem);
                        setNewItem({title: "", content: ""})
                    }}
                >Add</button>
            </form>
        </div>
    );
}

export default CreateArea;