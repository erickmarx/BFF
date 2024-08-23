import { ExampleAPI } from "../api/example-api";
import { bookDB } from "../book";
import { Book } from "./interface/book.interface";

const anyApi = new ExampleAPI();

export const books: () => Promise<Book[]> = async () => {
  await anyApi.getHealth();

  return bookDB;
};
