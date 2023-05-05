import BookService from "../services/BookService.js";

const checkBook = (req, res, next) => {
    try{
        let book = BookService.getBook(req.params.id);
        if(book){
            next();
        }else{
            res.status(404).json('Book not found');
        }
    }catch (e){
        res.status(500).json(e.message);
    }
}

export default checkBook;