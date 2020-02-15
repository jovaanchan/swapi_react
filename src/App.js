import React, {useEffect, useState} from 'react';
import Person from './Person';
import "./App.css";

function App() {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeople();
  }, []);

  const getPeople = async () => {
    const response = await fetch(`https://swapi.co/api/people/?page=1`);
    const data = await response.json();
    console.log(data);
    

    //home world
    data.results.forEach(eachPerson => {
      var eachHomeWorld = getHomeWorld(eachPerson.homeworld);
      eachHomeWorld.then(planet => {
        eachPerson.homeworld = planet;
      });
    });

    //films
    data.results.forEach(eachPerson => {
      var eachFilm = getFilms(eachPerson.films);
      eachFilm.then(films => {
        if (films.length === 0) {
          eachPerson.films = "Nil";
        } else {
          eachPerson.films = films;
          setPeople(curRows => [...curRows, eachPerson]);
          //setPeople(data.results);
        }
      });
    });

    //species
    data.results.forEach(eachPerson => {
      var eachSpecies = getSpecies(eachPerson.species);
      eachSpecies.then(species => {
        eachPerson.species = species;
      });
    });

    //vehicles
    data.results.forEach(eachPerson => {
      var eachVehicles = getVehicles(eachPerson.vehicles);
      eachVehicles.then(vehicles => {
        if (vehicles.length === 0) {
          eachPerson.vehicles = "Nil";
        } else {
          eachPerson.vehicles = vehicles;
        }
      });
    });

    //starships
    data.results.forEach(eachPerson => {
      var eachStarship = getStarship(eachPerson.starships);
      eachStarship.then(starships => {
        if (starships.length === 0) {
          eachPerson.starships = "Nil";
        } else {
          eachPerson.starships = starships.join(", ");
        }
      });
    });
  };
  

  const getHomeWorld = async (link) => {
    const response = await fetch(`${link}`); 
    const data = await response.json();
    return data.name;
  };
  
  const getFilms = async links => {
    var filmsPromise = links.map(async link => {
      const response = await fetch(`${link}`);
      const data = await response.json();
      return data.title;
    });
    var allPromise = Promise.all(filmsPromise).then(film => {
      return film;
    });
    return allPromise;
  };

  const getSpecies = async (link) => {
    const response = await fetch(`${link}`); 
    const data = await response.json();
    return data.name;
  };

  const getVehicles = async links => {
    var vehiclesPromise = links.map(async link => {
      const response = await fetch(`${link}`);
      const data = await response.json();
      return data.name;
    });
    var allPromise = Promise.all(vehiclesPromise).then(vehicles => {
      return vehicles;
    });
    return allPromise;
  };

  const getStarship = async links => {
    var starshipsPromise = links.map(async link => {
      const response = await fetch(`${link}`);
      const data = await response.json();
      return data.name;
    });
    var allPromise = Promise.all(starshipsPromise).then(starships => {
      return starships;
    });
    return allPromise;
  };

  return (
    <div className="App">
      <img src="/starwars.png" alt="STAR WARS"></img>

      <div className="person">
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
        homeworld={person.homeworld}
        films={person.films}
        species={person.species}
        vehicles={person.vehicles}
        starships={person.starships}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
