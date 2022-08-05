import express from 'express'
import { NotFoundError } from '@lootmaster/common';

const router = express.Router();

router.all('*', async () => {
    throw new NotFoundError();
});

export { router as notFoundRouter}