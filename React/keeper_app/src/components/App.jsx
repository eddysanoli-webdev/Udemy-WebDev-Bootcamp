import React, {useState} from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import initialNotes from '../notes';
import CreateArea from './CreateArea'

const App = () => {

    // =======================
    // STATES

    // Stateful Note Object List
    const [notes, setNotes] = useState(initialNotes);

    // =======================
    // HANDLERS

    // Handle the "Add" Button Press
    const handleAdd = (newNote) => {

        // Append the new note to the previous list of notes
        setNotes(prevValue => {
            return [...prevValue, newNote];
        })
    }

    // Handle the "Delete" Button Press
    const handleDelete = (id) => {

        // Return all elements that dont have an index that matches with the selected ID
        setNotes(prevValue => {
            return prevValue.filter((item, index) => index !== id);
        })
    }

    // =======================
    // RENDER
    return (
        <div>
            <Header />
            <CreateArea onAdd = { handleAdd }/>

            {/* Notes */}
            <div className="content">
                
                {/* 
                Render each note:
                    - Give a unique key to each element
                    - Make the key accesible to the user by passing it in the "ID" field
                    - Pass the function for deleting the object from the "notes" array
                */}
                {notes.map((note, index) => {
                    return (
                        <Note 
                            key = { index }
                            id = { index }
                            title = { note.title }
                            content = { note.content }
                            onDelete = { handleDelete }
                        />
                    );
                })}

            </div>

            <Footer />
        </div>
    );
}

export default App;