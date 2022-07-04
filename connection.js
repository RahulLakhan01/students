const {Client} = require('pg');

const connection_client = new Client({
    host:'localhost',
    user:'demodb',
    port:5432,
    password:'2001lakhan'
});

module.exports = connection_client;