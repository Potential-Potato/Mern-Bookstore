const express = require('express')
const router = express.Router()
const Book = require('../models/book')

//get all books  from database
router.get('/', async (req, res) => {
    try{        
        const books = await Book.find({})
        return res.status(200).send({
            count: books.length,
            data: books
        })
    }catch(err){
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
})

//save a new book to database
router.post('/', async (req, res) => {
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message: 'Send all required fields'
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }

        const book = await Book.create(newBook)
        return res.status(201).send(book)
    }catch(err){
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
})

//get a single book by id from database
router.get('/:id', async (req, res) => {
    try{   
        const { id } = req.params     
        const book = await Book.findById(id)
        return res.status(200).send(book)
    }catch(err){
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
})

//update a book from database
router.put('/:id', async (req, res) => {
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message: 'Send all required fields'
            })
        }
        const { id } = req.params

        const result = await Book.findByIdAndUpdate(id, req.body)

        if (!result){
            return res.status(404).json({ message: 'Book not found'})
        }

        return res.status(200).send({ message: 'Book update successfully'})
    }catch(err){
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
})

//deletea book from database by id
router.delete('/:id', async (req, res) => {
    try{
        const { id } = req.params
        const result = await Book.findByIdAndDelete(id)

        if(!result){
            return res.status(404).json({ message: 'Book not found'})
        }
        
        return res.status(200).send({ message: 'Book deleted successfully'})
    }catch(err){
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
})

module.exports = router