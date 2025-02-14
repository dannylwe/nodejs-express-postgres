import database from '../models';

class BookService {
    static async getAllBooks() {
        try {
            return await database.Book.findAll({raw: true});
        } catch(error) {
            throw(error);
        }
    }

    static async addBook(newBook) {
        try {
          return await database.Book.create(newBook);
        } catch (error) {
          throw error;
        }
      }

    static async getSingleBook(ID) {
        try {
            const singleBook = await database.Book.findOne({
                where: {id: Number(ID)}
            });
            return singleBook;
        } catch (error) {
            throw(error)
        }
    }

    static async updateBook(ID, updateBook) {
        try {
            const bookToUpdate = await database.Book.findOne({
                where: {id: Number(ID)}
            });
           
            if(bookToUpdate) {
                await database.Book.update(updateBook, {
                    where: {id: Number(ID)}
                });
                return updateBook;
            }

            return null;
            
        } catch(error) {
            throw(error);
        }
    }

    static async deleteBook(ID) {
        try {
            const BookToDelete = await database.Book.findOne({
                where: {id: Number(ID)}
            })
            if(BookToDelete) {
                const DeletedBook = await database.Book.destroy({
                    where: {id: Number(ID)}
                });
                return DeletedBook;
            }
            return null;
        } catch(error) {
            throw(error);
        }
    }
}

export default BookService;
