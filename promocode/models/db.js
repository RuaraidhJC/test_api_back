
"use strict";

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};
const config = require('../configs/config');

console.log(config);

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.hostname,
    port: config.port,
    dialect: 'mysql',
    operatorsAliases: false,
    define: {
        defaultScope: {
            attributes: { exclude: ["createdAt", "updatedAt"] }
        }
    }
});

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        // For each file in ./models, import the sequelize model and add it to db
        const model = sequelize.import(path.join(__dirname, file));
        console.log(file);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

// Make sequelize and Sequelize objects available without importing them each time
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.equals = (a, b) => {
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);

    if (aProps.length !== bProps.length) {
        return false
    }
    for (let cpt = 0; cpt < aProps.length; cpt++) {
        let propName = aProps[cpt];
        if (a[propName] !== b[propName]) {
            return false
        }
    }
    return true;
};

module.exports = db;
