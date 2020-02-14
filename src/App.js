import React, {useEffect, useState} from 'react';
import Person from './Person';
import HomeWorld from './Misc';
//import "./App.css";

function App() {

  const [people, setPeople] = useState([]);
  const [homeWorld, setHomeWorld] = useState([]);

  useEffect(() => {
    getPeople();
  }, []);

  const getPeople = async () => {
    const response = await fetch(`https://swapi.co/api/people`);
    const data = await response.json();
    console.log(data);
    getHomeWorld(data.results.homeworld);
    setPeople(data.results);
  };

  const getHomeWorld = async (link) => {
    const response = await fetch(`${link}`);
    const data = await response.json();
    console.log(data.name);
    setHomeWorld(data.name);
  };

  return (
    <div className="app">
      <div className="personBox">
      {people.map(person => (
        <Person 
        key={person.name} //unique key
        name={person.name} 
        height={person.height}
        mass={person.mass}
        hair_color={person.hair_color}
        skin_color={person.skin_color}
        eye_color={person.eye_color}
        birth_year={person.birth_year}
        gender={person.gender}
        />
      ))}
      {homeWorld.map(homeworld => (
        <HomeWorld
        homeworld={homeworld.homeworld}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
