import React from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <Header />
            <div className="content">
                <Note />
                <Note />
                <Note />
                <Note />
            </div>
            <Footer />
        </div>
    );
}

export default App;