import { Request, Response, Router } from 'express';
import {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie
} from '../controllers/movie.controllers';

const movieRouter = Router();


movieRouter.post('/:userId', createMovie);
movieRouter.get('/', getAllMovies);
movieRouter.get('/:movieId', getMovieById);
movieRouter.patch('/:movieId', updateMovie);
movieRouter.delete('/:movieId', deleteMovie);

export default movieRouter;