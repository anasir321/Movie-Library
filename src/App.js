import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");  //new state for search function
  const [movies, setMovies] = useState([]); //creating a new state to pass movies

  useEffect(() => {
    searchMovies(searchTerm); //calling function to search for movies
  }, [searchTerm]);

  const searchMovies = async (title) => { //function that fetches movies
    const response = await fetch(`${API_URL}&s=${title}`); //calling API
    const data = await response.json(); 

    setMovies(data.Search);
  };


  return (
    <div className="app">
      <h1>Kinophile's Library</h1>

      <div className="search">
        <input    //used to take input from user
          value={searchTerm}     
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="Search for movies"    //text displayed when search bar is empty
        />
        <img    //calls search icon from the search file
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}

        />
      </div>

      {movies?.length > 0 ? (   //if condition to check for a movie
        <div className="container">     
          {movies.map((movie) => (    //describing what we want to render on each iteration of the map 
            <MovieCard movie={movie} />  //dynamically passing movies as a prop
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;