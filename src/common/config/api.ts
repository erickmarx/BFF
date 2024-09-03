export const APIConfig = {
  ingredients: {
    baseURL: process.env.INGREDIENTS_BASE_URL || 'http://localhost:3000',
    endpoint: process.env.INGREDIENTS_ENDPOINT || '/ingredients',
  },
  recipes: {
    baseURL: process.env.RECIPES_BASE_URL || 'http://localhost:3000',
    endpoint: process.env.RECIPES_ENDPOINT || '/recipes',
  },
  shop: {
    baseURL: process.env.SHOP_BASE_URL || 'http://localhost:3000',
    endpoint: process.env.SHOP_ENDPOINT || '/shop',
  },
};
