import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes';

mongoose.connect('mongodb://localhost:27017/papapin', ()=>{
  console.log('Conected to mongodb...');
});

const app = express();

app.use('/api', routes);
app.use(bodyParser.json());

export default app;
