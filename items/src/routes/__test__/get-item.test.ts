import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../app'



it('returns 404 if the not authorized', async () => {
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .get(`/api/items/${id}`)
        .send({})
        .expect(401);
});

it('returns 404 if the item is not found', async () => {
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .get(`/api/items/${id}`)
        .set('Cookie', global.signin())
        .send({})
        .expect(404);
});

it('returns the item if item is found', async () => {
    const name = 'itemName';
    const cost = 10;

    const createItemResponse = await request(app)
        .post('/api/items')
        .set('Cookie', global.signin())
        .send({
            name, 
            cost
        })
        .expect(201);

    const getItemResponse = await request(app)
        .get(`/api/items/${createItemResponse.body.id}`)
        .set('Cookie', global.signin())
        .send()
        .expect(200);
    
        expect(getItemResponse.body.name).toEqual(name);
        expect(getItemResponse.body.cost).toEqual(cost);
});