const Sequelize = require('sequelize');

const LoanApplication = sequelize.define('LoanApplication', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    creditscore: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    status: {
        type: Sequelize.ENUM('pending', 'approved', 'rejected'),
        defaultValue: 'pending',
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'),
    },
});

module.exports = LoanApplication;
