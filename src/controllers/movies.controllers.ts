import { Request, Response } from 'express';
import MovieModel from '../model/movies.model';

export const getAllMovies = (req: Request, res: Response) => {
  res.status(200).send('Get all movies');
};

export const createMovies = async (req: Request, res: Response) => {
  const { name, poster_image, score, genre } = req.body
  const { userId } = req.params

  try {
    if (!name || !poster_image || !score || !genre) throw new Error('Missing fields');

    const newUser = await MovieModel.create({ name, poster_image, score, genre });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  };
  //res.status(200).send('Movie created')
};

export const getMoviesById = async (req: Request, rest: Response) => {
  const { userId } = req.params

  try {
    const user = await MovieModel.findById({ _id: userId });
    rest.status(200).json(user);
  } catch (error) {
    rest.status(500).json(error)
  }
}

export const updateMovies = async (req: Request, res: Response) => {
  const {userId} = req.params;
  const {name, email} = req.body;


  try {
    const user = await MovieModel.findByIdAndUpdate(
        { _id: userId },
       { 
        $set: { name: name, email: email } 
      },
      { new: true } 
       );

       res.status(201).json(user);

  } catch (error) {
      res.status(500).json(error);
  }
  //res.status(200).send('User updated');
};

export const deleteMovies = (req: Request, res: Response) => {
  res.status(202).send('Movie deleted');
};