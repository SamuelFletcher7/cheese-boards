const Board = require('../models/board.model')
const  {db} = require('../db/db')


describe('Board', () => {
    beforeAll(async () => {
        await db.sync()
    })
    test('Board has a name and description',async () => {
        const board = await Board.create({desc:'Test desc',type:'Test board',rating:5})
        expect(board.name).toBe('Trish')
        expect(board.desc).toBe('Test@test.com')
        expect(board.rating).toBe(5)
        expect(board.id).toBeTruthy()
    })
})