import { Request, Response, Router } from 'express';
import {
  createGenre,
  getAllGenre,
  addGenreToMovieById,
  deleteGenre
} from '../controllers/genre.controllers';


const genreRoutes = Router();

genreRoutes.get('/', getAllGenre)
genreRoutes.post('/', createGenre);
genreRoutes.post('/:movieId', addGenreToMovieById);
genreRoutes.delete('/:genreId', deleteGenre);



export default genreRoutes;