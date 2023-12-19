import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDatabase from './config/database.js';
import pokemonRoutes from './routes/pokemon.routes.js';

const app = express();
const PORT = process.env.PORT|| 8080;
const baseURL = '/api/v1';

dotenv.config();

connectDatabase();

app.use(cors());
app.use(express.json());

app.use(`${baseURL}/pokemons`, pokemonRoutes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));