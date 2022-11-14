const { DataTypes, Model } = require('sequelize')
const db = require('../db/db')

class Board extends Model {}

Board.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    type: {
        type: DataTypes.STRING,
        allowNull:false
    },
    desc: {
        type: DataTypes.STRING,
        allowNull:false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
},
{sequelize:db}
)

module.exports = Board