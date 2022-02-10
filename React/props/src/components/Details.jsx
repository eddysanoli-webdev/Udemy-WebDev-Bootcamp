import React from 'react';

const Details = (props) => {
    return (
        <div className="details">
            <p>{props.tel}</p>
            <p>{props.email}</p>
        </div>
    );
}

export default Details;