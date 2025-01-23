import express, { Router } from 'express'
import cors from 'cors';
import { analyseRouter } from './routes/analyse.route.js';

const app = express();

app.use(express.json());  

app.use(cors({
  origin:'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
allowedHeaders: ['Content-Type', 'Authorization'],
  credentials:true,
}))


app.use('/analyze',analyseRouter );

const PORT = 5010;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});