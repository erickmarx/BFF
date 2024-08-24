import { bookDB } from "../book";
import { Book } from "../query/interface/book.interface";
import { AddBookDTO } from "./interface/add-book.interface";

export class BookMutation {
  public static AddBook(data: AddBookDTO): Book {
    const newBook = {
      id: String(bookDB.length + 1),
      title: data.title,
      author: data.author,
    };

    bookDB.push(newBook);

    return newBook;
  }
}
