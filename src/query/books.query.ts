import { bookDB } from "../book";
import { Book } from "./interface/book.interface";

export const books: () => Book[] = () => bookDB;
