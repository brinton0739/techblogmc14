const { User } = require('../model');

const userData = [
    {
        email: 'me@email.com',
        password: '$2b$10$UbyHlQ1CpCYnizGzj2aMQuYADBrDptqJChpWNrl2xrLJAr44SLvTK'
    },
    {
        email: 'you@email.com',
        password: '$2b$10$UbyHlQ1CpCYnizGzj2aMQuYADBrDptqJChpWNrl2xrLJAr44SLvTK'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;