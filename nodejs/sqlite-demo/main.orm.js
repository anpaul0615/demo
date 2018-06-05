const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    storage: 'db.sqlite'
});

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

// Create or Replace Table
User.sync({ force: true })
    // Insert Data
    .then(() => {
        return User.create({
            firstName: 'John',
            lastName: 'Hancock'
        });
    })
    // Select Data
    .then(()=>{
        return User.findAll({ raw: true });
    })
    .then(result=>{
        console.log('result : ', result);
    });
