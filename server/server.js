import express from 'express';
import movieRoutes from './routes/movie.routes.js';
import { connectDB } from './configs/mongo.config.js';
import cors from "cors"

const app = express();
app.use(express.json()); 
connectDB()
app.use(cors())
app.use('/', movieRoutes); 

app.listen(8000, () => console.log('Server started on 8000'));
