import { Request, Response, Router } from 'express';
import {
  createMovie,
  getMovieById,
  getAllMovies
} from '../controllers/movie.controllers';

const movieRouter = Router();

movieRouter.post('/:userId', createMovie);
movieRouter.get('/:movieId', getMovieById);
movieRouter.get('/', getAllMovies);

export default movieRouter;