const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    it('should set testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('GET /', () => {
        it('should return 200 OK', async () => {
            const response = await request(server).get('/');

            expect(response.status).toBe(200)
        });
        
        it('should return json', async () => {
            const response = await request(server).get('/');

            expect (response.type).toBe('application/json');
            
        });

        it('should return { api: up }', async () => {
            const response = await request(server).get('/');

            expect (response.body).toEqual({ api: 'up' });
            
        });
    });
});


// https status code
// format of data (JSON)
// shape of response