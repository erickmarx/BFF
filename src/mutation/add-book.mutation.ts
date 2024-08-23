import { bookDB } from "../book";
import { Book } from "../query/interface/book.interface";

export function addBook(
  _,
  { title, author }: { title: string; author: any }
): Book {
  const newBook = { id: String(bookDB.length + 1), title, author };
  bookDB.push(newBook);
  console.log(bookDB);
  return newBook;
}
