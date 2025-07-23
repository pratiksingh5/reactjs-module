import { Header, MovieCard, MovieList, MovieChip } from "./components";
import { movies } from "./utils/constant";
import { useState } from "react";

const App = () => {
  // start se
  const [movieName, setMovieName] = useState(movies[0].movieName);
  const [movieImage, setMovieImage] = useState(movies[0].imgLink);



  console.log("state wala Movie Name", movieName);

  // return se pehle JSX
  return (
    <div className="container bg-slate-800 text-white">
      <Header />
      <div className="h-[90vh] flex">
        <div className="w-[50%] p-8">
          <h1 className="text-2xl font-semibold text-blue-500 my-4">
            MOVIE LIST
          </h1>
          <ul className="flex flex-col gap-10">
            {movies.map((movie) => (
              <li
                className={`border border-white rounded-lg p-6 text-xl list-none cursor-pointer hover:bg-[#23384a] `}
                onClick={() => {
                  console.log("movie Name", movie.movieName);
                  setMovieName(movie.movieName);
                  setMovieImage(movie.imgLink)
                }}
              >
                {movie.movieName} 
                {/* {movieName} */}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[50%] h-[100%] p-8">
          <h1 className="text-2xl font-semibold text-blue-500 my-4">
            SELCTED MOVIE
          </h1>
          <div className="h-[65%] mb-6">
            <img
              className="h-[100%] w-[500px] object-cover"
              src= {movieImage}
              alt="movie"
            ></img>
          </div>
          <h2 className="text-4xl font-bold text-green-400 text-center  w-[500px]">
            {movieName}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default App;
