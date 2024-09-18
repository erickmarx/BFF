export const API_CONFIG = {
  cart: {
    baseURL: process.env.CART_BASE_URL || 'http://localhost:3000/cart',
  },
  recipe: {
    baseURL: process.env.RECIPE_BASE_URL || 'http://localhost:3000/recipe/',
  },
  shop: {
    baseURL: process.env.SHOP_BASE_URL || 'http://localhost:3000/shop',
  },
};
