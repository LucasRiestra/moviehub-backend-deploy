import { Request, Response } from 'express';
import MovieModel from '../model/movie.model';
import GenreModel from '../model/genre.model';
import prisma from '../db/client';

export const createGenre = async (req: Request, res: Response) => {
  const { name } = req.body

  try {
    const genre = await prisma.genre.create({ 
      data: {name}});

    res.status(201).json(genre);
  } catch (error) {
    res.status(500).json(error);
  };
};

export const getAllGenre = async (req: Request, res: Response) => {
  try {
    const allGenres = await prisma.genre.findMany()
    res.status(201).json(allGenres)
  }catch (error){
    res.status(500).send(error);
  }
};

export const addGenreToMovieById = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  const { genreId } = req.body;

  try {
    const movie = await prisma.movie.findUnique({
      where: { id: movieId },
    });

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    const updatedMovie = await prisma.movie.update({
      where: { id: movieId },
      data: {
        genre: {
          connect: { id: genreId },
        },
      },
    });

    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json(error);
  }
};
