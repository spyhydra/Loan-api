const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/loan');





const testDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log(" Database Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

return testDbConnection();

module.exports = { sequelize, testDbConnection };