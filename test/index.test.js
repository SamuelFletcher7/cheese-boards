const {Board,Cheese,User} = require('../models/index')
const  db = require('../db/db')


describe('Index', () => {
    beforeAll(async () => {
        await db.sync()
        await Board.sync({force:true})
        await User.sync({force:true})
        await Cheese.sync({force:true})

        const a = await User.create({email:'Jay@test.com',name:'Jay'})
        const b = await Board.create({desc:'Test desc',type:'Test board',rating:5})
        const c1 = await Cheese.create({desc:'Test desc',name:'Cheddar'})
        const c2 = await Cheese.create({desc:'Test desc',name:'Edam'})
        await a.addBoard([b])
        await b.addCheese([c1,c2])
    })
    test('Board has an associated user',async () => {
        const res = await Board.findAll({include:User})
        expect(res[0].getDataValue('UserId')).toBe(1)
    })
    test('Board has associated cheeses',async () => {
        await db.sync()
        const res2 = await Board.findAll({include:Cheese})
        expect(res2[0].getDataValue('Cheeses')).toBeTruthy
    })
})