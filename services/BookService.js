import books from "../database/data.js";
import {v4} from 'uuid';

class BookService{

    getBooks() {
        return books;
    }

    getBook(id) {
        try{
            return books[id];
        }catch (e){
            return e.message;
        }
    }

    addBooks(book){
        try{
            book['reviews'] = [];
            books[v4()] = book;
            return books;
        }catch (e){
            return e.message;
        }
    }

    deleteBook(id){
        try{
            delete books[id];
            return books;
        }catch (e){
            return e.message;
        }
    }

    updateTitle(query){
        try{
            books[query.id].title = query.title;
            return books;
        }catch (e){
            return e.message;
        }
    }

    addReview(id, review){
        try{
            books[id].reviews[v4()] = review;
            return books;
        }catch (e){
            return e.message;
        }
    }

    deleteReview(id, reviewId){
        try{
            delete books[id].reviews[reviewId];
            return books;
        }catch (e){
            return e.message;
        }
    }

    getReviews(id){
        try{
            return books[id].reviews;
        }catch (e){
            return e.message;
        }
    }
}

export default new BookService();