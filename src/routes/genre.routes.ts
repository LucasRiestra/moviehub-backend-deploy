import { Request, Response, Router } from 'express';
import {
  createGenres,
} from '../controllers/genre.controllers';


const genreRoutes = Router();

genreRoutes.post('/:movieId', createGenres);

export default genreRoutes;