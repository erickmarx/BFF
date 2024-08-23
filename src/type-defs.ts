export const typeDefs = `#graphql
  type Query {
    books: [Book]
    authors: [Author]
  }

  type Mutation {
    addBook(title: String!, author: AuthorInput!): Book
  }

  input AuthorInput {
    name: String!
    release: String!
  }

  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    release: String
  }
`;
