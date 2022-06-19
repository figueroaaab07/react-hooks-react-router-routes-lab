import React, { useState } from "react";
import { actors } from "../data";

function Actors() {
  const [actorsData] = useState([...actors]);
  const actorsDataDisplay = actorsData.map(actor =>{
    return (
      <div key={actor.name}>
        <h2>Name: {actor.name}</h2>
        <span>Movies:</span><br></br>
        <ul>
          {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>
      </div>
    ) 
  }
)

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsDataDisplay}
    </div>
  )
}

export default Actors;
