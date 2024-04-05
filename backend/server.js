if (process.env.NODE_ENV !== 'production'){ //check if app is running on prod
    require('dotenv').config()
}

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

//routes import
const bookRoutes = require('./routes/books')

//middlware for parsing request body
app.use(express.json())

//middleware for handling cors
//option 1: allow all origin
app.use(cors())
//option 2: allow custom origin
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }))


//routes use
app.get('/', (req, res) => {
    res.status(200).send('This is the homepage')
})

app.use('/books', bookRoutes)

mongoose.connect(process.env.DATABASE_URL) //connects to mongodb
    .then(() => {
        console.log('Connected to database')
        app.listen(process.env.PORT || 5555)
    })
    .catch((err) => {
        console.log(err)
    })
