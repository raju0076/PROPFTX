import React, { useEffect } from 'react';
import axios from 'axios';
import { fetchData } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import "../styles/MovieCard.css";

export const MovieCard = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // Optional: Log the movies for debugging
  console.log("Movies from Redux:", movies);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!Array.isArray(movies)) return <p>No movies found.</p>; // ✅ Safety check

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie._id} className="movie-card">
          <h1>{movie.title}</h1>
          <p>Director: {movie.director}</p>
          <p>{movie.cast}</p>
          <p>Release Date: {movie.releaseDate}</p>
          <p>Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
};
