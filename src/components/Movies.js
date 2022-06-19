import React, { useState } from "react";
import { movies } from "../data";

function Movies() {
  const [moviesData] = useState([...movies]);
  const moviesDataDisplay = moviesData.map(movie =>{
    return (
      <div key={movie.title}>
        <h2>Name: {movie.title}</h2>
        <span>Time: {movie.time}</span><br></br>
        <br></br><span>Genres:</span><br></br>
        <ul>
          {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesDataDisplay}
    </div>
  )
}

export default Movies;
