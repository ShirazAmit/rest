const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000
const app = express();

app.use(cors())

app.get('/', (req , res) => {
    res.json({m: 'hy'})
})

//Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/meals', require('./routes/meals'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))