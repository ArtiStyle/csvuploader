import request from 'supertest';
import path from 'path';
import { server } from './app';
describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    await wait(500);
    const res = await request(server.app).post('/users/csv').send({
      userId: 1
    });
    expect(res.statusCode).toEqual(500);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('no file provided');
  });

  it('should return 200 and users JSON', async () => {
    await wait(500);
    const res = await request(server.app)
      .post('/users/csv')
      .attach('csv', path.join(process.cwd(), '/uploads/test/test.csv'));

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('users');
  });
});

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));
