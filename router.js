import Router from 'express';
import BookController from "./controllers/BookController.js";
import checkBook from "./middlewares/bookExistMiddleware.js";
import checkReview from "./middlewares/ReviewExistMiddleware.js";
import checkBodyValidation from "./middlewares/validateBodyMiddleware.js";
const router = new Router();

router.get('/', BookController.getBooks);
router.get('/:id',checkBook, BookController.getBook);
router.get('/:id/reviews',checkBook, BookController.getReviews);

router.post('/', checkBodyValidation, BookController.addBook);
router.post('/:id/reviews',checkBook, BookController.addReview);

router.put('/', BookController.updateTitle);

router.delete('/:id', checkBook, BookController.deleteBook);
router.delete('/:id/reviews/:reviewId',checkBook, checkReview, BookController.deleteReview);

export default router;