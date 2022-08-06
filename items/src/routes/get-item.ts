import express, { Request, Response } from 'express'
import { NotFoundError, requireAuth, validateRequest } from '@lootmaster/common'
import { Item } from '../model/item';

const router = express.Router();

router.get('/api/items/:id', requireAuth, async (req: Request, res: Response) => {
    const item = await Item.findById(req.params.id);
    if(!item) {
        throw new NotFoundError();
    }
    res.send(item);

});

export { router as getItemRouter}