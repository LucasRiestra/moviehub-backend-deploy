import { Request, Response } from 'express';
import MovieModel from '../model/movie.model';
import GenreModel from '../model/genre.model';

export const createGenres = async (req: Request, res: Response) => {
  const { name } = req.body
  const { movieId } = req.params

  try {

    const genre = await GenreModel.create({ name, movieId });

    await MovieModel.findByIdAndUpdate(
        {_id:movieId},
         {$push: {genre: genre._id},}
         
    );

    res.status(201).json(genre);
  } catch (error) {
    res.status(500).json(error);
  };
  //res.status(200).send('Movie created')
};