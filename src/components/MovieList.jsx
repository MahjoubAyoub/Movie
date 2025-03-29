import React from "react";
import { Link } from 'react-router-dom';
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div style={styles.movieListContainer}>
      {movies.map((movie, index) => (
        <Link to={`/movie/${movie.title}`} key={index} >
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};
const styles = {
  movieListContainer: {
    display: 'flex',              // Use flexbox to display movie cards next to each other
    flexWrap: 'wrap',             // Allow wrapping to the next row if needed
    justifyContent: 'space-around', // Space out the cards evenly
    gap: '10px',                 // Space between the movie cards
  },
  movieCardLink: {
    textDecoration: 'none',     // Remove underline from the Link component
  }
};
export default MovieList;
