import React, {useState} from 'react';

const ToDoItem = (props) => {

    // Stateful Crossed State
    const [crossed, setCrossed] = useState(false);

    return (

        // Cross the item
        //  - The styling is changed to "line-through" depending on the value of "Crossed"
        //  - The internal state of "crossed" is also changed to its opposite
        //  - Delete the item by calling the "onChecked" function
        <li 
            style={{textDecoration: crossed ? "line-through" : null}}
            onClick={ () => {

                // Cross or uncross the item
                setCrossed(crossed ? false : true);

                // Delete the crossed item after half a second
                // (The crossed state is not updated until the function finishes executing.
                //  This means that we dont have to check for the crossed state to be true,
                //  we have to check for it to be false, as it will then be changed to true)
                setTimeout(() => {
                    if (!crossed) props.onChecked(props.id); 
                }, 500);
                
            }}
        >
            { props.listItem }
        </li>
    );
}

export default ToDoItem;