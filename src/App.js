import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import MovieDetail from "./components/MovieDetail";
import AddMovie from "./components/AddMovie"; // Ensure this is correctly imported

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "./inception.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      title: "The Dark Knight",
      description: "Batman faces the Joker in Gotham City.",
      posterURL: "./thedarkknight.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    { 
      title: "Interstellar", 
      description: "A space exploration story with time travel adventure", 
      posterURL: "./inter.jpg", 
      rating: 4.5, 
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      title: "The Matrix",
      description: "A hacker discovers a dystopian world controlled by machines.",
      posterURL: "./matrix.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/vKQi3bBA1y8"
    },
    {
      title: "Avatar",
      description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission.",
      posterURL: "./avatar.jpg",
      rating: 4.7,
      trailer: "https://www.youtube.com/embed/5PSNL1qE6VY"
    },
  ]);

  const [filter, setFilter] = useState({ title: "", rating: 0 });

  // Renamed addMovie function (lowercase "a")
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      (movie.title || "").toLowerCase().includes((filter.title || "").toLowerCase()) &&
      movie.rating >= filter.rating
  );

  return (
    <Router>
      <div>
        <h1>Movie App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter setFilter={setFilter} />
                <MovieList movies={filteredMovies} />
                <div style={{ marginTop: "20px" }}>
                  <h2>Add a New Movie</h2>
                  <Link to="/add-movie">
                    <button>Add Movie</button>
                  </Link>
                </div>
              </>
            }
          />
          <Route
            path="/movie/:title"
            element={<MovieDetail movies={movies} />}
          />
          <Route 
            path="/add-movie" 
            element={<AddMovie addMovie={addMovie} />} // Corrected component usage
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
