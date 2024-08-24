import { ExampleAPI } from "../api/example-api";
import { bookDB } from "../book";
import { Book } from "./interface/book.interface";

const anyApi = new ExampleAPI();

export class BooksQuery {
  public static async GetBooks(): Promise<Book[]> {
    await anyApi.getHealth();

    return bookDB;
  }
}
