import React from "react";

const MovieChip = ( {movieName}) => {
  return (
      <li className="border border-white rounded-lg p-6 text-xl list-none"> {movieName}</li>  
  );
};

export default MovieChip;
