const { DataTypes, Model } = require('sequelize')
const db = require('../db/db')

class Cheese extends Model {}

Cheese.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    desc: {
        type: DataTypes.STRING,
        allowNull:false
    }
},
{sequelize:db}
)

module.exports = Cheese