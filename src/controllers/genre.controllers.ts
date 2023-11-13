import { Request, Response } from 'express';
import MovieModel from '../model/movie.model';
import GenreModel from '../model/genre.model';
import prisma from '../db/client';

export const createGenre = async (req: Request, res: Response) => {
  const { name } = req.body

  try {
    const genre = await prisma.genres.create({ 
      data: {name}});

    res.status(201).json(genre);
  } catch (error) {
    res.status(500).json(error);
  };
};

export const getAllGenre = async (req: Request, res: Response) => {
  try {
    const allGenres = await prisma.genres.findMany()
    res.status(201).json(allGenres)
  }catch (error){
    res.status(500).send(error);
  }
};

export const deleteGenre = async (req: Request, res: Response) => {
  const { genreId } = req.params;

  try {
    const deletedGenre = await prisma.genres.delete({
      where: { id: genreId },
    });

    res.status(200).json(deletedGenre);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const addGenreToMovieById = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  const { genreId } = req.body;

  try {
    const updatedMovie = await prisma.movies.update({
      where: { id: movieId },
      data: {
        genres: {
          connect: { id: genreId },
        },
      },
    });

    const finalMovie = await prisma.movies.findUnique({
      where: { id: movieId },
      include: { genres: true },
    });

    res.status(200).json(finalMovie);
  } catch (error) {
    res.status(500).json(error);
  }
};
