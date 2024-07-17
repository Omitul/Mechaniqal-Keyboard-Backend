import cors from 'cors';
import express, { Request, Response } from 'express';

import globalErrorHandler from './app/middlewares/GlobalErrorHandler';
import notFound from './app/middlewares/notFound';

const app = express();

///its a parser

app.use(express.json());
app.use(cors());

///application routes

app.use(globalErrorHandler);
app.use(notFound);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

console.log(process.cwd());

export default app;
