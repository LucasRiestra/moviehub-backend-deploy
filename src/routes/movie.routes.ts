import { Request, Response, Router } from 'express';
import {
  createMovies,
} from '../controllers/movie.controllers';

const movieRouter = Router();

movieRouter.post('/:userId', createMovies);

export default movieRouter;