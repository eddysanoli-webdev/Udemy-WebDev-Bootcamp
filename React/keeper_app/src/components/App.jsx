import React from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import notes from '../notes';

// NOTES:
// Make sure to add 

const App = () => {
    return (
        <div>
            <Header />
            <div className="content">
                
                {/* Render each note */}
                {notes.map(note => {
                    return (
                        <Note 
                            key = {note.key}
                            title = {note.title}
                            content = {note.content}
                        />
                    );
                })}

            </div>
            <Footer />
        </div>
    );
}

export default App;