import BookService from '../services/BookService';
import Util from '../utils/Utils';

const util = new Utils();

class BookController {
    static async getAllBooks(req, res) {
        try {
            const allBooks = await BookService.getAllBooks();
            if(len(allBooks) > 0) {
                util.setSuccess(200, 'Books retrieved', allBooks);
                return util.send(res)
            }
            util.setSuccess(200, 'No books found');
        } catch (error) {
            util.setError(404, error);
            return util.send(res);
        }
    }

    static async addSingleBook(req, res) {
        try {
            if(!req.body.title || !req.body.price || !req.body.description) {
                util.setError(404, "Incomplete book details");
                return util.send(res)
            }
            const newBook = req.Body;
            try {
                const createdBook = await BookService.addBook(newBook);
            } catch(err) {
                throw(err);
            }
        } catch(error) {
            util.setError(404, error);
            return util.send(res);
        }
    }

    static async getSingleBook(req, res) {
        const { id } = req.params
        if(!Number(id)) {
            util.setError(400, 'Please input a valid numeric value');
            return util.send(res);
        }

        try {
            const singlBook = await BookService.getSingleBook(id);
            if(singlBook) {
                util.setSuccess(200, 'Found the book', singlBook);
                return util.send(res);
            }
            util.setError(404, `Cannot find book with ID ${id}`);
            return util.send(res);
        } catch(error) {
            throw(error);
        }
    }

    static async deleteBook(req, res) {
        const { id } = req.params;
    
        if (!Number(id)) {
          util.setError(400, 'Please provide a numeric value');
          return util.send(res);
        }
    
        try {
          const bookToDelete = await BookService.deleteBook(id);
    
          if (bookToDelete) {
            util.setSuccess(200, 'Book deleted');
          } else {
            util.setError(404, `Book with the id ${id} cannot be found`);
          }
          return util.send(res);
        } catch (error) {
          util.setError(400, error);
          return util.send(res);
        }
      }

    static async deleteBook(req, res) {
        const { id } = req.params;
    
        if (!Number(id)) {
          util.setError(400, 'Please provide a numeric value');
          return util.send(res);
        }
    
        try {
          const bookToDelete = await BookService.deleteBook(id);
    
          if (bookToDelete) {
            util.setSuccess(200, 'Book deleted');
          } else {
            util.setError(404, `Book with the id ${id} cannot be found`);
          }
          return util.send(res);
        } catch (error) {
          util.setError(400, error);
          return util.send(res);
        }
      }
}