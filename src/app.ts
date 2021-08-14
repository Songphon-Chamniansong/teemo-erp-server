import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
const app: Application = express();
const port: number = 3000;

const dbURL = 'mongodb+srv://teemo:Teemo123@teemocluster.ubber.mongodb.net/classroom?retryWrites=true&w=majority'

// use mongoose for mongodb
mongoose.connect(dbURL, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true });

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!');
});

app.listen(port, (): void => {
  console.log(`server is listening on ${port}`);
});
