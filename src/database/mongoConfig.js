let mongoConfig = {
    name: 'apartment-service',
    host: 'mongodb',
    port: 3306,
    user: 'root',
    password: 'password'
};

if (process.env.MONGODB_SCHEMA) mongoConfig.name = process.env.MONGODB_SCHEMA;
if (process.env.MONGODB_HOST) mongoConfig.host = process.env.MONGODB_HOST;
if (process.env.MONGODB_PORT) mongoConfig.port = process.env.MONGODB_PORT;
if (process.env.MONGODB_USER) mongoConfig.user = process.env.MONGODB_USER;
if (process.env.MONGODB_PASSWORD) mongoConfig.password = process.env.MONGODB_PASSWORD;

module.exports = mongoConfig;
