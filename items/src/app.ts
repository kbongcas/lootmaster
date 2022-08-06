import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'


import { errorHandler, currentUser } from '@lootmaster/common';
import cookieSession from 'cookie-session';
import { createItemRouter } from './routes/create-item';
import { getItemRouter } from './routes/get-item';
import { getItemsRouter } from './routes/get-items';
import { updateItemRouter } from './routes/update-item';

const app = express();
app.set('trust proxy', true)
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test'
    })
);

app.use(currentUser);

app.use(createItemRouter)
app.use(getItemRouter)
app.use(getItemsRouter)
app.use(updateItemRouter)

app.use(errorHandler);


export { app }