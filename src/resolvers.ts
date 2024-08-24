import { QueryResolvers, MutationResolvers } from "./generated/graphql";
import { BookMutation } from "./mutation/book.mutation";
import { AddBookDTO } from "./mutation/interface/add-book.interface";
import { IMutation } from "./mutation/interface/mutation.interface";
import { BooksQuery } from "./query/books.query";
import { Book } from "./query/interface/book.interface";

export const query: { books: () => Promise<Book[]> } = {
  books: BooksQuery.GetBooks,
};

export const mutations: { addBook: IMutation<AddBookDTO, Book> } = {
  addBook: (_, data) => BookMutation.AddBook(data),
};

export const resolvers: { Query: QueryResolvers; Mutation: MutationResolvers } =
  {
    Query: query,
    Mutation: mutations,
  };
