import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/action';
import "../styles/MovieCard.css";

export const MovieCard = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log("Movies from Redux:", movies);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!movies || !Array.isArray(movies.data)) return <p>No movies found.</p>;

 return (
  <div className="movie-grid">
    {movies.data.map((movie) => {

      return (
        <div key={movie.id} className="movie-card">
          <img src={movie.poster_path} alt={movie.original_title} />
          <h1>{movie.original_title}</h1>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}  <span  style={{ color:  '#FFD700'  }}>★</span></p>
          <p><strong>overview:</strong> {movie.overview}</p>
        </div>
      );
    })}
  </div>
);

};
