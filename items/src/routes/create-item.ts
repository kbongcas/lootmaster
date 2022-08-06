import express, { Request, Response } from 'express'
import { requireAuth, validateRequest } from '@lootmaster/common'
import { body } from 'express-validator'
import { Item } from '../model/item';

const router = express.Router();

router.post('/api/items', requireAuth, [ 
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    body('cost')
        .isFloat({ gt: -1})
        .withMessage('Price muse be greater than or equal to 0'),
], validateRequest, async (req: Request, res: Response) => {
    const {name, cost}  = req.body;
    const  item = Item.build({
        name,
        cost,
        userId: req.currentUser!.id
    });
    await item.save();
    res.status(201).send(item);
});

export { router as createItemRouter}