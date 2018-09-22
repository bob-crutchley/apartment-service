const express = require('express');
const service = express.Router();
const getAllOperation = require('./operation/findAll');
const createOperation = require('./operation/create');


service.get('/apartment/all', (request, response) => {
    getAllOperation(result => { response.status(result.status).send(result.value) });
});

service.post('/apartment/create', (request, response) => {
    createOperation(request.body, result => { response.status(result.status).send(result.value) });
});

module.exports = service;
