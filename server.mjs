import { createRequestHandler } from '@remix-run/express';
import express from 'express';
// import helmet from 'helmet';
import morgan from 'morgan';

import * as build from './build/index.js';

const app = express();
// app.use(helmet());
app.use(express.static('public'));

app.use(morgan(
  '\x1b[7m:date[iso]\x1b[0m :method :url :status :res[content-length] - :response-time ms',
));

app.all('*', createRequestHandler({ build }));

app.listen(3000, () => {
  console.info('App listening to port 3000');
});
