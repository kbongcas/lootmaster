import request from 'supertest';
import { app } from '../../app'

const createItem = () => {
    const name = 'adfaf';
    const cost = 10;
    return request(app)
        .post('/api/items')
        .set('Cookie', global.signin())
        .send({
            name: name,
            cost: cost
        });
}

it('returns 404 if the not authorized', async () => {
    await request(app)
        .get(`/api/items`)
        .send({})
        .expect(401);
});


it('it returns a list of tickets', async () => {
    await createItem();
    await createItem();
    await createItem();

    const response = await request(app)
        .get('/api/items')
        .set('Cookie', global.signin())
        .send()
        .expect(200)

    expect(response.body.length).toEqual(3);
});