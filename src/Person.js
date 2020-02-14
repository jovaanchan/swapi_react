import React from 'react';

const Person = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Hair color: {props.hair_color}</p>
            <p>Skin color: {props.skin_color}</p>
            <p>eye color: {props.eye_color}</p>
            <p>birth year: {props.birth_year}</p>
            <p>gender: {props.gender}</p>
        </div>
    )
}

export default Person;