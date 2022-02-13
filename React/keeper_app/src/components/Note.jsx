import React from 'react';

const Note = (props) => {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>

            {/* After clicking the "DELETE" button, we delete the note with the selected ID */}
            <button
                onClick={ () => {
                    props.onDelete(props.id);
                }}
            >DELETE</button>
        </div>
    );
}

export default Note;