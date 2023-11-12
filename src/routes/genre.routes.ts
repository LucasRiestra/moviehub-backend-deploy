import { Request, Response, Router } from 'express';
import {
  createGenre,
  getAllGenre,
  addGenreToMovieById
} from '../controllers/genre.controllers';


const genreRoutes = Router();

genreRoutes.get('/', getAllGenre)
genreRoutes.post('/', createGenre);
genreRoutes.post('/:movieId', addGenreToMovieById);

export default genreRoutes;