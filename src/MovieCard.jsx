import React from 'react';   


//made a new jsx file to show details of all files in a dynamic component
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {  //using object restructuring for props
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;