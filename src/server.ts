import express from 'express';
import cors from 'cors';
import userRoutes from "./routes/user.routes";
import movieRoutes from './routes/movie.routes';
import genreRoutes from './routes/genre.routes';
import {requestRouter} from './routes/request.routes';
import FileUpload from 'express-fileupload';
import { Request, Response } from 'express';

const app = express();
// Cors configuration
const corsOptions = {
  origin: ['http://localhost:3000', 'https://moviehub-next-js.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(FileUpload({
  useTempFiles: true,
  tempFileDir: './uploads',
  limits: {fileSize: 10000000},
  abortOnLimit: true
}));
// Routes.
app.use("/user", userRoutes);
app.use("/movie", movieRoutes);
app.use("/genre", genreRoutes);
app.use("/", requestRouter);

app.get("/", (req: Request, res: Response): void => {
  res.status(200).json({ message: "This is working bro!" });
});

export default app;
