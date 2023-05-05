let books = require('../database/data.js');
class BookController {
    constructor() {
        this.books = books;
    }

    getBooks(req, res) {
        try{
            res.status(200).json(this.books);
        }catch (e){
            res.status(500).json(e.message);
        }
    }

    getBook(req, res) {
        try{
            res.status(200).json(this.books[req.params.id]);
        }catch (e){
            res.status(500).json(e.message);
        }
    }

    addBook(req, res) {
        try{
            this.books.push(req.body);
            res.status(200).json(this.books);
        }catch (e){
            res.status(500).json(e.message);
        }
    }

    deleteBook(req, res) {
        try{
            this.books.splice(req.params.id, 1);
            res.status(200).json(this.books);
        }catch (e){
            res.status(500).json(e.message);
        }
    }
}

export default new BookController();