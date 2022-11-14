const{User, Cheese, Board} = require('../models')
const db = require('./db')

async function seed(){
    await db.sync({
        force: true
    })
    
}

seed()