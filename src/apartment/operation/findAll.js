const mongoDB = require('../../database/mongo');
const config = require('../config');
const httpStatusCode = require('../../constant/httpStatusCode');

findAllOperation = (service) => {
    mongoDB(database => {
        database.name(config.mongoDBCollectionName).find().then(result => {
            service({status: httpStatusCode.OK, value: result})
        }).catch(error => {
            console.error(error);
            service({status: httpStatusCode.INTERNAL_SERVER_ERROR, value: 'failed to find all'});
        });
    });
};

module.exports = findAllOperation;
