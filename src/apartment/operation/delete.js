const mongoDB = require('../../database/mongo');
const config = require('../config');
const httpStatusCode = require('../../constant/httpStatusCode');

deleteOperation = (apartment, service) => {
    mongoDB(database => {
        database.name(config.mongoDBCollectionName).delete(apartment).then(result => {
            service({status: httpStatusCode.OK, value: result})
        }).catch(error => {
            console.error(error);
            service({status: httpStatusCode.INTERNAL_SERVER_ERROR, value: 'failed to delete'});
        });
    });
};

module.exports = deleteOperation;