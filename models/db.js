//CONEXÃO COM BANCO DE DADOS

const Sequelize = require('sequelize');


const sequelize = new Sequelize('postagens', 'root', '74739', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = { //exporta Sequelize e sequelize
    Sequelize,
    sequelize
}