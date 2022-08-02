import mongoose from 'mongoose';

import { app } from './app'

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