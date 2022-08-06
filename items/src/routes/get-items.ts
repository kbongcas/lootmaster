import express, { Request, Response } from 'express'
import { NotFoundError, requireAuth, validateRequest } from '@lootmaster/common'
import { Item } from '../model/item';

const router = express.Router();

router.get('/api/items', requireAuth, async (req: Request, res: Response) => {
    const items = await Item.find({});
    res.send(items);
});

export { router as getItemsRouter}