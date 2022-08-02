import request from 'supertest';
import { app } from '../../app';

it('it fails when a non existing email is supplied', async () => {
    return request(app)
    .post('/api/users/signin')
    .send({
        email: 'validemail@vemail.com',
        password: 'validpassword'
    })
    .expect(400);
});



it('it fails when a in correct password is supplied', async () => {
    await request(app)
    .post('/api/users/signup')
    .send({
        email: 'validemail@vemail.com',
        password: 'validpassword'
    })
    .expect(201);


    await request(app)
    .post('/api/users/signin')
    .send({
        email: 'validemail@vemail.com',
        password: 'notvalidpassword'
    })
    .expect(400);
});


it('responds with cookie when given valid credentials', async () => {
    await request(app)
    .post('/api/users/signup')
    .send({
        email: 'validemail@vemail.com',
        password: 'validpassword'
    })
    .expect(201);


    const response = await request(app)
    .post('/api/users/signin')
    .send({
        email: 'validemail@vemail.com',
        password: 'validpassword'
    })
    .expect(200);

    expect(response.get('Set-Cookie')).toBeDefined();
});