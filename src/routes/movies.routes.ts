import { Request, Response, Router } from 'express';
import {
  getAllMovies,
  createMovies,
  updateMovies,
  deleteMovies,
  getMoviesById
} from '../controllers/movies.controllers';

import { check } from '../middlewares/check.middleware';

const movieRoutes = Router();

movieRoutes.get('/', getAllMovies);
movieRoutes.get('/:userId', getMoviesById)
movieRoutes.post('/', check, createMovies);
movieRoutes.patch('/:userId', updateMovies);
movieRoutes.delete('/:id', deleteMovies);

export default movieRoutes;