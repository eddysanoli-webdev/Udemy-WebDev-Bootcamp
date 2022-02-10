import React from 'react';
import Avatar from './Avatar';
import Details from './Details';

const Contact = (props) => {
    return (
        <div className="card">
            <div className="info">
                <p>{props.key}</p>
                <h2>{props.name}</h2>
                <Details tel={props.tel} email={props.email} />
            </div>
            <Avatar 
                img = {props.img}
            />
        </div>
    );
}

export default Contact