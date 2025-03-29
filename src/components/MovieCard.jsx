import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div style={styles.card} className="movie-card">
    <img src={movie.posterURL} alt={movie.title} style={{ width: "100%" }} />
    <h3>{movie.title}</h3>
    <p>{movie.description}</p>
    <p>Rating: {movie.rating}</p>
  </div>
  );
};
const styles = {
  card: {
    width: '200px',             // Set a fixed width for the card
    border: '1px solid #ddd',   // Border for the card
    padding: '10px',            // Padding inside the card
    textAlign: 'center',        // Center the text inside the card
    borderRadius: '8px',        // Optional: rounded corners
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  // Optional: subtle shadow effect
  },
  image: {
    width: '100%',              // Make image width fill the card
    height: 'auto',             // Maintain aspect ratio of the image
    borderRadius: '4px',        // Optional: rounded corners for the image
  }
};
export default MovieCard;
