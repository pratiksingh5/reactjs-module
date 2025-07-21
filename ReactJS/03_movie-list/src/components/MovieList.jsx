import React from "react";
import MovieChip from "./MovieChip";
import { movies } from "../utils/constant";

const MovieList = () => {
  return (
    <div className="w-[50%] p-8">
      <ul className="flex flex-col gap-10">
        {movies.map((movie) =>  <MovieChip movieName = {movie.movieName} />)}
      </ul>
    </div>
  );
};

export default MovieList;
