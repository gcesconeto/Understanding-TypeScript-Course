import express, { Request, Response, NextFunction } from 'express';

import todos from './routes/todos';

const app = express();

app.use(express.json())

app.use('/todos', todos);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).send(err);
})

app.listen(3000);