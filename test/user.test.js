const User = require('../models/user.model')
const db = require('../db/db')


describe('User', () => {
    beforeAll(async () => {
        await db.sync()
        await User.sync({force:true})
    })
    test('User has a name and email',async () => {
        const user = await User.create({email:'Test@test.com',name:'Trish'})
        expect(user.name).toBe('Trish')
        expect(user.email).toBe('Test@test.com')
        expect(user.id).toBeTruthy()
    })
})