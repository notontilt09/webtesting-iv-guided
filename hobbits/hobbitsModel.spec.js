const request = require('supertest');

const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel.js');

describe('hobbits model', () => {
    describe('insert()', () => {
        afterEach(async () => {
            await db('hobbits').truncate()
        })

        it('should insert provided hobbit to the db', async () => {
            const hobbit = await Hobbits.insert({name: 'sam'})

            expect(hobbit.name).toBe('sam');
        });

        it('should insert provided hobbit to the db', async () => {
            await Hobbits.insert({name: 'sam'});
            await Hobbits.insert({name: 'gaffer'});

            const hobbits = await db('hobbits');

            expect(hobbits.length).toBe(2);
        });
    });
});