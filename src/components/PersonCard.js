import React, { useState } from 'react';

const PersonCard = (props) => {
    const [ personAge, setPersonAge ] = useState(props.age);

    return (
        <div>
            <h1>{ props.lastName }, { props.firstName}</h1>
            <p>Age: { personAge }</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick={ (event) => setPersonAge(personAge +1) }>Birthday Button for: { props.firstName }</button>
        </div>

    )
}

export default PersonCard;