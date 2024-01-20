require('dotenv').config();
import express, { Application, Request, Response, NextFunction } from 'express';
const app: Application = express();

//Importing packages
import path from 'path';
import logger from 'morgan';

const PORT = process.env.PORT || 3000;

/// Handling routes
import indexRouter from './routes/index.routes';
app.use('/', indexRouter);

// Handling middlewares
app.use(express.static('public'));
app.use(logger('dev'));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Error handling middleware for handling 404 errors
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: 'Not Found' });
});
// Generic error handling middleware for other errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

//start the server
(() => {
  app.listen(PORT, () => {
    //connect to db and then connect to server
    console.log(`http://localhost:${PORT}/`);
  });
})();

export default app;
