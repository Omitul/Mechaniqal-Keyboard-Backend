import cors from 'cors';
import express, { Request, Response } from 'express';

import globalErrorHandler from './app/middlewares/GlobalErrorHandler';
import notFound from './app/middlewares/notFound';
import { ProductRoutes } from './app/modules/product/product.route';
import { CheckOutRoutes } from './app/modules/checkcout/checkout.router';

const app = express();

///its a parser

app.use(express.json());
app.use(cors());

///application routes
app.use('/api', ProductRoutes);
app.use('/api', CheckOutRoutes);

app.use(globalErrorHandler);
app.use(notFound);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

console.log(process.cwd());

export default app;
