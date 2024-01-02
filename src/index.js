import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes/index.js';
import database from './config/database.js';
import {
  appErrorHandler,
  genericErrorHandler,
  notFound
} from './middlewares/error.middleware.js';
import logger, { logStream } from './config/logger.js';

import morgan from 'morgan';

const app = express();
const port = process.env.APP_PORT;

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('combined', { stream: logStream }));

database();

app.use('/', routes());
app.use(appErrorHandler);
app.use(genericErrorHandler);
app.use(notFound);

app.listen(port, () => {
  logger.info(`Server started at ${port}`);
});

export default app;
