import express from 'express';
import userRoutes from "./routes/user.routes";
import movieRoutes from './routes/movie.routes';
import genreRoutes from './routes/genre.routes';

//initializations
// Importamos la Aplicacion
// Importamos la Configuracion
const app = express();
app.use(express.json());
//settings
//routes
app.use("/user", userRoutes);
app.use("/movie", movieRoutes);
app.use("/genre", genreRoutes)

export default app;