import request from  'supertest';
import { app } from '../../app';
import { Item } from '../../model/item'

it('has a route handler listening to api/routes for post requests', async () => {
    const response = await request(app)
        .post('/api/items')
        .send({});
    expect(response.status).not.toEqual(404);
});

it('can be only accessed if the s is signed in', async () => {
    await request(app)
        .post('/api/items')
        .send({})
        .expect(401);
});

it('returns non 401 status code if user is signed in', async () => {
    const response = await request(app)
        .post('/api/items')
        .set('Cookie', global.signin())
        .send({});
    expect(response.status).not.toEqual(401);
});

it('returns an error if an invalid parameters are provided', async () => {

    await request(app)
        .post('/api/items')
        .set('Cookie', global.signin())
        .send({
            name: 'valid',
            cost: -10
        })
        .expect(400);

    await request(app)
        .post('/api/items')
        .set('Cookie', global.signin())
        .send({
            name: '',
            cost: 10
        })
        .expect(400);
});

it('creates an item with valid inputs', async () => {
    // add in check to make sure ticket was saved
    let items = await Item.find({});
    expect(items.length).toEqual(0);
    const name = 'adfaf';
    const cost = 10;
    await request(app)
        .post('/api/items')
        .set('Cookie', global.signin())
        .send({
            name: name,
            cost: cost
        })
        .expect(201);
    items = await Item.find({});
    expect(items.length).toEqual(1);
    expect(items[0].name).toEqual(name);
    expect(items[0].cost).toEqual(cost);

});
