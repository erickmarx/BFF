export interface IRecipe {
  id: string;
  title: string;
  description?: string;
  creationDate: Date;
  ingredients: { name: string; quantity: number }[];
}
