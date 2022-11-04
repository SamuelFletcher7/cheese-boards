const Board = require("./board.model")
const Cheese = require("./cheese.model")
const User = require("./borrower.model")

User.hasMany(Board)
Board.belongsTo(User)

Cheese.belongsToMany(Board, {through: 'Board_Cheese'})
Board.belongsToMany(Cheese, {through: 'Board_Cheese'})

module.exports = {User, Board, Cheese}