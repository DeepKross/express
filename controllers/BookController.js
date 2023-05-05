import BookService from "../services/BookService.js";
class BookController {

    getBooks(req, res) {
        try{
            let books = BookService.getBooks();
            res.status(200).json(books);
        }catch (e){
            res.status(500).json(e.message);
        }
    }

    getBook(req, res) {
        try{
            let book = BookService.getBook(req.params.id);
            res.status(200).json(book);
        }catch (e){
            res.status(500).json(e.message);
        }
    }

    addBook(req, res) {
        try{
            //add a book to the books object
            let books = BookService.addBooks(req.body);
            res.status(200).json(books);
        }catch (e){
            res.status(500).json(e.message);
        }
    }

    deleteBook(req, res) {
        try{
            //delete a book from the books object with the id
            let books = BookService.deleteBook(req.params.id);
            res.status(200).json(books);
        }catch (e){
            res.status(500).json(e.message);
        }
    }

    updateTitle(req, res) {
        try{
            //update a book title from the books object with the id
            let books = BookService.updateTitle(req.query);
            res.status(200).json(books);
        }catch (e){
            res.status(500).json(e.message);
        }
    }

    addReview(req, res) {
        try{
            //add a review to a book from the books object with the id
            let books = BookService.addReview(req.params.id, req.body);
            res.status(200).json(books);
        }catch (e){
            res.status(500).json(e.message);
        }
    }

    deleteReview(req, res) {
        try{
            //delete a review from a book from the books object with the id
            let books = BookService.deleteReview(req.params.id, req.params.reviewId);
            res.status(200).json(books);
        }catch (e){
            res.status(500).json(e.message);
        }
    }

    getReviews(req, res) {
        try{
            //get all reviews from a book from the books object with the id
            let reviews = BookService.getReviews(req.params.id);
            res.status(200).json(reviews);
        }catch (e){
            res.status(500).json(e.message);
        }
    }
}

export default new BookController();