import { Request, Response } from 'express';
import MovieModel from '../model/movie.model';
import UserModel from '../model/user.model';
import prisma from '../db/client';

export const createMovie = async (req: Request, res: Response) => {
  const { name } = req.body
  const { poster_image } = req.body
  const { score } = req.body
  const { genres } = req.body
  const { userId } = req.params

  try {
    const movie = await prisma.movies.create({ 
      data: {
        name, 
        poster_image, 
        score,
        genres: { connect: genres.map((genre: String) => ({ id:genre })) },
        User: {connect: {id: userId } } },
    });
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json(error);
  };
  //res.status(200).send('Movie created')
};

export const getMovieById = async (req: Request, res: Response) => {
  const { movieId } = req.params;

  try {
    const movie = await prisma.movies.findUnique({
      where: { id: movieId },
      include: {
        genres: true,
      },
    });

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json(error);
  }
};


export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const allMovies = await prisma.movies.findMany({
      include: {
        genres: true,
      },
    })
    res.status(201).json(allMovies)
  }catch (error){
    res.status(500).send(error);
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  const { name, poster_image, score, genres } = req.body;

  try {
    const updatedMovie = await prisma.movies.update({
      where: { id: movieId },
      data: { 
        name,
        poster_image,
        score,
        genres: { connect: genres.map((genre: String) => ({ id:genre })) }   
      },
    });

    res.status(201).json(updatedMovie);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params;

  try {
    const deletedMovie = await prisma.movies.delete({
      where: { id: movieId },
    });

    res.status(200).json(deletedMovie);
  } catch (error) {
    res.status(500).json(error);
  }
};