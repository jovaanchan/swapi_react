import React from 'react';

const Person = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Hair color: {props.hair_color}</p>
            <p>Skin color: {props.skin_color}</p>
            <p>Eye color: {props.eye_color}</p>
            <p>Birth year: {props.birth_year}</p>
            <p>Gender: {props.gender}</p>
            <p>Homeworld: {props.homeworld}</p>
            <p>Films: {props.films}</p>
            <p>Species: {props.species}</p>
            <p>Vehicles: {props.vehicles}</p>
            <p>Starships: {props.starships}</p>
        </div>
    )
}

export default Person;