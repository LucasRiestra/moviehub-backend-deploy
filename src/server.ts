import express from 'express';
import cors from 'cors';
import userRoutes from "./routes/user.routes";
import movieRoutes from './routes/movie.routes';
import genreRoutes from './routes/genre.routes';

// Inicializaciones
const app = express();

// Configuración de CORS
const corsOptions = {
  origin: 'http://localhost:5173', // Ajusta esto al puerto correcto de tu aplicación React
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());

// Rutas
app.use("/user", userRoutes);
app.use("/movie", movieRoutes);
app.use("/genre", genreRoutes);

export default app;
