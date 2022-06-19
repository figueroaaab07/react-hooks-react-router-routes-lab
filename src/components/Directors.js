import React, { useState } from "react";
import { directors } from "../data";

function Directors() {
  const [directorsData] = useState([...directors]);
  const directorsDataDisplay = directorsData.map(director =>{
    return (
      <div key={director.name}>
        <h2>Name: {director.name}</h2>
        <span>Movies:</span><br></br>
        <ul>
          {director.movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>
      </div>
    ) 
  }
)

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsDataDisplay}
    </div>
  )}

export default Directors;
