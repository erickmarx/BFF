import { Book } from "./query/interface/book.interface";

export const bookDB: Book[] = [
  {
    id: "1",
    title: "The Awakening",
    author: { name: "Khaled", release: "2005" },
  },
  {
    id: "2",
    title: "City of Glass",
    author: { name: "Khaled Hosseini", release: "2003" },
  },
];
