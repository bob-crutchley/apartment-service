const express = require('express');
const app = express();
const applicationPort = 3001;
const applicationHost = '0.0.0.0';
const bodyParser = require('body-parser');

// application config
app.use(require('cors')());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// routes
app.use('/api', require('./src/apartment/service'));

app.listen(applicationPort, applicationHost, () => console.log('PDF Store Service Listening on ' + applicationPort));
