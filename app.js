const express = require('express');
const app = express();
const cors = require('cors')


app.use(cors())

app.use('/api/users', require('./routes/users'));
app.use('/api/meals', require('./routes/meals'));

module.exports = app;