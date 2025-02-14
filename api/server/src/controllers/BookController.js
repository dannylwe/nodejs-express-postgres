import BookService from '../services/BookService';
import Util from '../utils/Utils';

const util = new Util();

class BookController {
    static async getAllBooks(req, res) {
        try {
            const allBooks = await BookService.getAllBooks();
            if(allBooks.length > 0) {
                util.setSuccess(200, 'Books retrieved', allBooks);
                return util.send(res)
            }
            util.setError(200, 'No books found');
            return util.send(res)
        } catch (error) {
            util.setError(404, error);
            return util.send(res);
        }
    }

    static async addSingleBook(req, res) {
        try {
            if(!req.body.title || !req.body.price || !req.body.description) {
                util.setError(400, "Incomplete book details");
                return util.send(res)
            }
            const newBook = req.body
            try {
                const createdBook = await BookService.addBook(newBook);
                util.setSuccess(201, 'created book', createdBook);
                util.send(res);
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

      static async updatedBook(req, res) {
        const alteredBook = req.body;
        const { id } = req.params;
        if (!Number(id)) {
          util.setError(400, 'Please input a valid numeric value');
          return util.send(res);
        }
        try {
          const updateBook = await BookService.updateBook(id, alteredBook);
          if (!updateBook) {
            util.setError(404, `Cannot find book with the id: ${id}`);
          } else {
            util.setSuccess(200, 'Book updated', updateBook);
          }
          return util.send(res);
        } catch (error) {
          util.setError(404, error);
          return util.send(res);
        }
      }
}

export default BookController;