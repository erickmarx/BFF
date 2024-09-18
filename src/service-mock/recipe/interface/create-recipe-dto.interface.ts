export interface ICreateRecipeDTO {
  title: string;
  description?: string;
  ingredients: { name: string; quantity: number }[];
}
