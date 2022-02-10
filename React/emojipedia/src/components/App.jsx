import React from 'react';
import emojipedia from '../emojipedia';
import Card from './Card';

const App = () => {
    return (
        <div>
            <h1><span>emojipedia</span></h1>
            <dl className="dictionary">

                {/* Create one card per emojipedia entry */}
                {emojipedia.map(emoji => {
                    return (
                        <Card 
                            emoji = {emoji.emoji}
                            name = {emoji.name}
                            meaning = {emoji.meaning}
                        />
                    );
                })}
                
            </dl>
        </div>
    );
}

export default App;