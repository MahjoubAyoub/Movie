import React from "react";

const Filter = ({ setFilter }) => {
  const handleTitleChange = (e) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      title: e.target.value,
    }));
  };

  const handleRatingChange = (e) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      rating: parseFloat(e.target.value),
    }));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by title"
        onChange={handleTitleChange}  // Using the function here
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        min="0"
        max="5"
        onChange={handleRatingChange}  // Using the function here
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  filterContainer: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  input: {
    padding: '10px',
    margin: '5px',
    fontSize: '16px',
  }
};

export default Filter;

