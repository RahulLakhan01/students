const client = require('./connection.js');

const express = require('express');

const app = express();

app.get('/api' , (req , res) => {
    res.send('You are on the server');
});

app.listen(3000 , () => {
    console.log('Server has been created');
});

client.connect();