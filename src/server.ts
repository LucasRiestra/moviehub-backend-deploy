import express from 'express';
import userRoutes from "./routes/user.routes";
import movieRoutes from './routes/movies.routes';

//initializations
// Importamos la Aplicacion
// Importamos la Configuracion
const app = express();
app.use(express.json());
//settings

//routes
app.use("/user", userRoutes);
app.use("/movies", movieRoutes);

export default app;