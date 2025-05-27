import React, { useEffect } from 'react';
import axios from 'axios';
import { fetchData } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import "../styles/MovieCard.css"
export const MovieCard = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
   <div className="movie-grid">
  {movies.map((movie) => (
    <div key={movie._id} className="movie-card">
      <h1>{movie.title}</h1>
      <p>Director: {movie.director}</p>
      <p>Genre: {movie.genre}</p>
      <p>Year: {movie.year}</p>
    </div>
  ))}
</div>

  );
};
