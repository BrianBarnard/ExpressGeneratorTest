var Sequelize = require('sequelize');
var userName = process.env.DB_USER;
var password = process.env.DB_PASSWORD;
var hostName = process.env.DB_HOST;
var database = 'SampleDatabase';

// Initialize Sequelize to connect to DB
var DB = new Sequelize(database, userName, password, {
    dialect: 'mssql',
    host: hostName,
    port: 1433, // Default port
    logging: false, // disable logging; default: console.log

    dialectOptions: {
        requestTimeout: 30000 // timeout = 30 seconds
        , encrypt: true
    }
});

// Define the 'Provider' model
var Provider = database.define('provider', {
    providerId: Sequelize.UUID,
    providerName: Sequelize.STRING
});

// Tell Sequelize to DROP and CREATE tables in the database and put some test data in there
console.log("Sync my ship");
database.sync({force: true})
.then(function()
{
    Provider.create({providerId: '9f00f05d-8467-43d8-b201-a9487cb9beba', providerName: 'The Goat Roofers'});
});
console.log("Shipped Synced");