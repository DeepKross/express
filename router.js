let Router = require('express').Router;
let BookController = require('./controllers/BookController.js');
const router = new Router();

router.get('/', BookController.getBooks);
router.get('/:id', BookController.getBook);
router.post('/', BookController.addBook);
router.put('/', BookController.updateBook);
router.delete('/:id', BookController.deleteBook);

export default router;