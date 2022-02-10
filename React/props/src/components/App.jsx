import React from 'react';
import Contact from './Contact';

const contacts = [
    {   
        id: 1,
        name: "Beyonce",
        img: "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
        tel: "+123 456 789",
        email: "b@beyonce.com"
    },
    {   
        id: 2,
        name: "Jack Bauer",
        img: "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
        tel: "+987 654 321",
        email: "jack@nowhere.com"
    },
    {
        id: 3,
        name: "Chuck Norris",
        img: "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
        tel: "+918 372 574",
        email: "gmail@chucknorris.com"
    }
];

const App = () => {
    return (
        <div>
            <h1>My Contacts</h1>
            <div className="contacts">

                {/* Render each card in a (sort-of) for-loop */}
                {/* (A unique key must be provided in order to create all the components
                     without errors) */}
                {contacts.map((contact) => {
                    return (
                        <Contact
                            key = {contact.id}
                            name = {contact.name}
                            img = {contact.img}
                            tel = {contact.tel}
                            email = {contact.email}
                        />
                    );
                })}

            </div>
        </div>
    );
}

export default App;