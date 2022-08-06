import express, { Request, Response } from 'express'
import { body } from 'express-validator'
import { Item } from '../model/item';
import { requireAuth, validateRequest, NotFoundError, NotAuthorizedError } from '@lootmaster/common'

const router = express.Router();

router.put('/api/items/:id', requireAuth, [ 
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    body('cost')
        .isFloat({ gt: -1})
        .withMessage('Price muse be greater than or equal to 0'),
], validateRequest, async (req: Request, res: Response) => {

    const item = await Item.findById(req.params.id)

    if(!item) {
        throw new NotFoundError();
    }
    
    if(item.userId !== req.currentUser!.id ) {
        throw new NotAuthorizedError()
    }

    item.set({
        name: req.body.name,
        cost: req.body.cost
    })

    await item.save();

    res.send(item);
});

export { router as updateItemRouter}