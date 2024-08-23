export interface AddBookDTO {
  title: string;
  author: {
    name: string;
    release: string;
  };
}
