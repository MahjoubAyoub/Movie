import React from "react";

const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min rating (1-5)"
        onChange={(e) => setFilterRating(Number(e.target.value))}
      />
    </div>
  );
};

export default Filter;
