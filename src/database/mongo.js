const databaseConfig = require('./mongoConfig');
let MongoClient = require('mongodb').MongoClient;

module.exports = (serviceOperation) => {
    MongoClient.connect('mongodb://' + databaseConfig.host + ':' + databaseConfig.port, {useNewUrlParser: true}).then(db => {
        let database = db.db(databaseConfig.name);
        serviceOperation(database);
        db.close().then().catch(error => console.error(error))
    }, err => {
        console.error('database connection failed');
        console.error(err)
    });
};
