//a middleware that ckecks if the review exists
import BookService from "../services/BookService.js";

const checkReview = (req, res, next) => {
    try{
        let book = BookService.getBook(req.params.id);
        if(book.reviews[req.params.reviewId]){
            next();
        }else{
            res.status(404).json('Review not found');
        }
    }catch (e){
        res.status(500).json(e.message);
    }
}

export default checkReview;