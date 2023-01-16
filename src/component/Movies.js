import React from "react";
import StarList from "./StarList";

export default function Movies({movie}) {
  return (
    <div className="moviecontainer">
      <div className="movieTitleContainer">
        <div className="movieTitle">{movie.title}</div>
        <div className="movieCategory">{movie.category}</div>
      </div>
      <StarList rating={movie.rating}/>
    </div>
  );
}
