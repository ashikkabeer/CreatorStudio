import dotenv from 'dotenv';
require('dotenv').config();

import express, { Application} from 'express';

import path from 'path';
import logger from 'morgan';

const app: Application = express();
const PORT = process.env.PORT || 3000;
// import indexRouter from '../src/routes/index.routes'
const router = express.Router(); // Create a new router instance
app.use('/', router); 
app.use(express.json());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));

(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
  });
})();
