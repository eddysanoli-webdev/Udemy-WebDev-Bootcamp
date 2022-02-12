import React, {useState} from 'react';

const ToDoItem = (props) => {

    const [crossed, setCrossed] = useState(false);

    return (

        // Cross the item
        //  - The styling is changed to "line-through" depending on the value of "Crossed"
        //  - The internal state of "crossed" is also changed to its opposite
        //  - Delete the item by calling the "onChecked" function
        <li 
            style={{textDecoration: crossed ? "line-through" : null}}
            onClick={ () => {
                setCrossed(crossed ? false : true);

                setTimeout(() => {
                    props.onChecked(props.id); 
                }, 500);
                
            }}
        >
            { props.listItem }
        </li>
    );
}

export default ToDoItem;