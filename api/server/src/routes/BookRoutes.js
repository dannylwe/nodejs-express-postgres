import { Router } from 'express';
import BookController from '../controllers/BookController';

const router = Router();

router.get('/', BookController.getAllBooks);
router.post('/', BookController.addSingleBook);
router.get('/:id', BookController.getSingleBook);
router.put('/:id', BookController.updatedBook);
router.delete('/:id', BookController.deleteBook);

export default router;
