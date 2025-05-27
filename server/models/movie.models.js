import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  genre: String,
  year: Number
});

export const Movie = mongoose.model('Movie', movieSchema);
