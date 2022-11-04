const Cheese = require('../models/cheese.model')
const  db = require('../db/db')


describe('Cheese', () => {
    beforeAll(async () => {
        await db.sync()
    })
    test('Cheese has a name and description',async () => {
        const cheese = await Cheese.create({desc:'Test desc',name:'Cheddar'})
        expect(cheese.name).toBe('Cheddar')
        expect(cheese.desc).toBe('Test desc')
        expect(cheese.id).toBeTruthy()
    })
})