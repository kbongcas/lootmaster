import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'

// Routers
import { currentUserRouter } from './routes/current-user';
import { signInRouter } from './routes/signin';
import { signOutRouter } from './routes/signout';
import { signUpRouter } from './routes/signup';
import { notFoundRouter } from './routes/not-found';

// Middleware
import { errorHandler  } from '@lootmaster/common';
import cookieSession from 'cookie-session';

const app = express();
app.set('trust proxy', true)
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test'
    })
);


app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);
app.use(notFoundRouter);


app.use(errorHandler);


export { app }