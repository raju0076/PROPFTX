import express from 'express';
import {
  createMovie,
  getMovies,
  getMovieById,
  updateMovie,
  deleteMovie
} from '../controllers/movie.controller.js';

const router = express.Router();

// POST to create a movie
router.post('/addmovie', createMovie);

// GET all movies
router.get('/getmovies', getMovies);

// GET a movie by id (notice the slash before :id)
router.get('/getbyid/:id', getMovieById);

// PUT to update movie by id
router.put('/update/:id', updateMovie);

// DELETE movie by id
router.delete('/delete/:id', deleteMovie);

export default router;
