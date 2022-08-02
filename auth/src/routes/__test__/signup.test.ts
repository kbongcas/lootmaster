import request from 'supertest';
import { app } from '../../app';

it('returns a 201 successful signup', async () => {
    return request(app)
    .post('/api/users/signup')
    .send({
        email: 'validemail@vemail.com',
        password: 'validpassword'
    })
    .expect(201);
});

it('returns a 400 invalid email', async () => {
    return request(app)
    .post('/api/users/signup')
    .send({
        email: 'invalidemail.com',
        password: 'validpassword'
    })
    .expect(400);
});

it('returns a 400 invalid password', async () => {
    return request(app)
    .post('/api/users/signup')
    .send({
        email: 'validemail@vemail.com',
        password: 'nvp'
    })
    .expect(400);
});


it('returns 400 a missing email or password', async () => {

    await request(app)
    .post('/api/users/signup')
    .send({
        email: '',
        password: 'validpassword'
    })
    .expect(400);

    await request(app)
    .post('/api/users/signup')
    .send({
        email: 'validemail@vemail.com',
        password: ''
    })
    .expect(400);
});


it('disallows duplicate emails', async () => {

    await request(app)
    .post('/api/users/signup')
    .send({
        email: 'validemail@vemail.com',
        password: 'validpassword'
    })
    .expect(201);

    await request(app)
    .post('/api/users/signup')
    .send({
        email: 'validemail@vemail.com',
        password: 'validpassword'
    })
    .expect(400);
});


it('it sets a cookie after successful signup', async () => {

    const response = await request(app)
    .post('/api/users/signup')
    .send({
        email: 'validemail@vemail.com',
        password: 'validpassword'
    })
    .expect(201);

    expect(response.get('Set-Cookie')).toBeDefined();
});