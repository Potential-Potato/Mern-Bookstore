const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const {PORT, mongoDBURL} = require('./config')

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

mongoose.connect(mongoDBURL) //connects to mongodb
    .then(() => {
        console.log('Connected to database')
        app.listen(PORT, () => {
            console.log(`listening on port: ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })
