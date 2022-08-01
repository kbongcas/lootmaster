import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'
import mongoose from 'mongoose';

// Routers
import { currentUserRouter } from './routes/current-user';
import { signInRouter } from './routes/signin';
import { signOutRouter } from './routes/signout';
import { signUpRouter } from './routes/signup';
import { notFoundRouter } from './routes/not-found';

// Middleware
import { errorHandler  } from './middlewares/error-handler';
import cookieSession from 'cookie-session';

const app = express();
app.set('trust proxy', true)
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: true
    })
)


app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);
app.use(notFoundRouter);


app.use(errorHandler);

const start = async () => {

    // Get Env Variables
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined');
    }

    // Connect to MongoDb
    try{
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth')
        console.log('Connected to Mongo DB')
    } catch (err) {
        console.error(err);
    }

    app.listen(3000, () => {
        console.log('Listening on port 3000')
    })
}

start();