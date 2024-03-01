const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { v4: uuidv4 } = require('uuid'); 
const app = express();
const port = 3000;

app.use(bodyParser.json());

let books = [
    {id: '123', title: 'Old title', author: 'Old author'}
];

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.send('<h1>Hi, welcome to the Book App</h1>')
})

app.get('/api/books', (req, res) => {
    res.json({message: 'Get all the books'});
})

app.get('/api/books/:id', (req, res) => {
    const id = req.params.id;
    res.json({message: `Get the book with ID ${id}`});
})

app.post('/api/books', (req, res) => {
    const {title, author} = req.body;

    const newBook = {
        id: uuidv4(),
        title,
        author
    };

    books.push = newBook;
    res.json({message: `Create a New Book`, book: newBook});
})

app.put('/api/books/:id', (req, res) => {
    const id = req.params.id;
    const {title, author} = req.body;

    const index = books.findIndex(book => book.id = id) 

    if(index !== -1) {
        books[index].title = title;
        books[index].author = author;
        res.json({message: `Updated book with ID ${id}`, book: books[index]})
    } else {
        res.status(404).json({error: `Book not found`});
    }
})

app.delete('/api/books/:id', (req, res) => {
    const id = req.params.id;
    res.json({message: `Delete book with ID ${id}`});
})

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
})