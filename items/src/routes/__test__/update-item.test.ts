import request from  'supertest';
import { Item } from '../../model/item'
import { app } from '../../app'
import mongoose from 'mongoose';

it('can be only accessed if the s is signed in', async () => {
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .put(`/api/items/${id}`)
        .send({
            name: 'est',
            cost: 10
        })
        .expect(401);
});


it('returns 404 if the provided id does not exist', async () => {
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .put(`/api/items/${id}`)
        .set('Cookie', global.signin())
        .send({
            name: 'est',
            cost: 10
        })
        .expect(404);
});

it('returns 401 if the provided item does not belong to the user', async () => {

    const name = 'adfaf';
    const cost = 10;
    const response = await request(app)
        .post('/api/items')
        .set('Cookie', global.signin())
        .send({
            name: name,
            cost: cost
        })
        .expect(201);

    await request(app)
        .put(`/api/items/${response.body.id}`)
        .set('Cookie', global.signin())
        .send({
            name: 'est',
            cost: 10
        })
        .expect(401);
});


it('returns 400 if user provides an invalid parameter', async () => {
    const name = 'adfaf';
    const cost = 10;
    const cookie = global.signin()
    const response = await request(app)
        .post('/api/items')
        .set('Cookie', cookie)
        .send({
            name: name,
            cost: cost
        })
        .expect(201);

    await request(app)
        .put(`/api/items/${response.body.id}`)
        .set('Cookie', cookie)
        .send({
            name: '',
            cost: 20
        })
        .expect(400);

    await request(app)
        .put(`/api/items/${response.body.id}`)
        .set('Cookie', cookie)
        .send({
            name: '',
            cost: -4
        })
        .expect(400);
});

it('updates the ticket', async () => {

    const name = 'adfaf';
    const cost = 10;
    const updatedName = '23304';
    const updatedCost = 11;
    const cookie = global.signin()
    const response = await request(app)
        .post('/api/items')
        .set('Cookie', cookie)
        .send({
            name: name,
            cost: cost
        })
        .expect(201);

    const updateResponse = await request(app)
        .put(`/api/items/${response.body.id}`)
        .set('Cookie', cookie)
        .send({
            name: updatedName,
            cost: 11
        })
        .expect(200);

    const getItemResponse = await request(app)
        .get(`/api/items/${updateResponse.body.id}`)
        .set('Cookie', cookie)
        .expect(200);

    expect(getItemResponse.body.name).toEqual(updatedName)
    expect(getItemResponse.body.cost).toEqual(updatedCost)

});