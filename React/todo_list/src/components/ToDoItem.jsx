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

                // Delay Before Deleting the Element
                // (Warning: Kind of confusing)
                //  1. We set the value of the "crossed" state but its not updated until
                //     the function finishes executing
                //  2. We then add the "setTimeout" function to the task queue. The value
                //     for the "crossed" state inside "setTimeout" will be the initial value
                //     for "crossed".
                //  3. The "onClick" event will finish, and the "crossed" variable will update
                //     adding the text decoration "line-through".
                //  4. After 0.5s, the "setTimeout" on the task queue will execute
                //  5. If "crossed" was initially false (The task was to be crossed) we delete
                //     said item present on the array by calling the "onChecked" function.
                //  6. If there are 5 items, and the fourth one is crossed, the "true" crossed
                //     state will remain to be associated with the index "3" (indexes begin 
                //     with 0). This will cause the previously fifth element, to now become the
                //     fourth element, inheriting the "true" value for the crossed state. To
                //     prevent this, after deleting the crossed item. We reset the crossed value
                //     of the new item with index "3"

                // Cross or uncross the item
                setCrossed(crossed ? false : true);

                // Delete the crossed item after half a second
                // (The crossed state is not updated until the function finishes executing.
                //  This means that we dont have to check for the crossed state to be true,
                //  we have to check for it to be false, as it will then be changed to true)
                setTimeout(() => {
                    if (!crossed) props.onChecked(props.id); 
                    setCrossed(!crossed ? false : true);
                }, 500);
                
            }}
        >
            { props.listItem }
        </li>
    );
}

export default ToDoItem;