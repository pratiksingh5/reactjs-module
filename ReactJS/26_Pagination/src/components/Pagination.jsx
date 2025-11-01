import React from "react";

const Pagination = ({ totalPages, page, setPage }) => {
  const handleNext = () => {
    if (page < totalPages) {
      setPage((page) => page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1 ) {
      setPage((page) => page - 1);
    }
  };

  return (
    <div className="flex justify-between mt-6 mx-auto gap-3 items-center w-[300px]">
      <button className="px-6 py-2 bg-blue-300" onClick={handlePrev}>Prev</button>
      <h4>
        Page: <span className="font-bold text-blue-600"> {page}</span> of{" "}
        <span className="font-bold text-blue-600"> {totalPages}</span>
      </h4>
      <button className="px-6 py-2 bg-blue-300" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
