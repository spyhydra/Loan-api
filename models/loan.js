const { Sequelize, DataTypes } = require('sequelize');
const sq = new Sequelize('postgres://postgres:root@localhost:5432/loan');

const User = sq.define("user", {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },

    name: {
        type: DataTypes.STRING,
    },

    age: {
        type: DataTypes.INTEGER,
    },


});
User.sync().then(() => {
    console.log("User Model synced");
});

module.exports = User;