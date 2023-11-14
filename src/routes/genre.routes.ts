import { Request, Response, Router } from 'express';
import {
  createGenre,
  
  deleteGenre,
  getAllGenres
} from '../controllers/genre.controllers';


const genreRoutes = Router();

genreRoutes.get('/', getAllGenres)
genreRoutes.post('/', createGenre);
genreRoutes.delete('/:genreId', deleteGenre);

export default genreRoutes;