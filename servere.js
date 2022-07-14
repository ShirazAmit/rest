const express = require('express');
const colors = require('colors')
const cors = require('cors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

const app = express();

// Connect to database
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())


//Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/meals', require('./routes/meals'));

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))