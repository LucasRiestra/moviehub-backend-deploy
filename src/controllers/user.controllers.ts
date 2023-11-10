import { Request, Response } from 'express';
import UserModel from '../model/user.model';
import prisma from '../db/client';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.user.findMany()
    res.status(201).json(allUsers)
  }catch (error){
    res.status(500).send(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password, movie } = req.body

  try {
    if (!name || !email || !password ||movie) throw new Error('Missing fields')

    const newUser = await prisma.user.create({
      data: { name, email, password, movie }
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  };
  //res.status(200).send('User created')
};

export const getUserById = async (req: Request, rest: Response) => {
  const { userId } = req.params

  try {
    const user = await (await UserModel.findById({ _id: userId }).populate('movie')).populate({path:'movie.genre'})

    rest.status(200).json(user);
  } catch (error) {
    rest.status(500).json(error)
  }
}

export const updateUser = async (req: Request, res: Response) => {
  const {userId} = req.params;
  const {name, email} = req.body;

  try {
    const user = await UserModel.findByIdAndUpdate(
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

export const deleteUser = (req: Request, res: Response) => {
  res.status(202).send('User deleted');
};