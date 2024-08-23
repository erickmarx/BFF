import { addBook } from "./mutation/add-book.mutation";
import { AddBookDTO } from "./mutation/interface/add-book.interface";
import { IMutation } from "./mutation/interface/mutation.interface";
import { books } from "./query/books.query";
import { Book } from "./query/interface/book.interface";

export const query: { books: () => Promise<Book[]> } = { books: books };

export const mutations: {
  addBook: IMutation<AddBookDTO, Book>;
} = { addBook };

export const resolvers = {
  Query: query,
  Mutation: mutations,
};
