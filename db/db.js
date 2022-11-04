const {Sequelize} = require('sequelize')
const path = require('path')

// const db = new Sequelize({
//     dialect:'sqlite',
//     storage: path.join(__dirname,'cheeseBoards.sqlite'),
//     logging: false
// })
const db = new Sequelize('sqlite:memory')

// module.exports = db
module.exports = {db}