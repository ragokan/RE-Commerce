// User Part
export const loginRoute = "/auth/login";
export const registerRoute = "/auth/register";
export const logoutRoute = "/auth/logout";
export const userInfoRoute = "/user/me";

// Product Part
export const getAllProducts = "/product/all";
export const getOneProduct = (id) => `/product/${id}`;
export const addProduct = "/product/add";
export const removeProduct = "/product/remove";
export const clearBasket = "/product/clear";

// Seller Part
export const sellerAddProduct = "/seller/products";
export const sellerUpdateProduct = (id) => `/seller/products/${id}`;
export const sellerDeleteProduct = (id) => `/seller/products/${id}`;

// Payment Part
export const paymentRoute = "/payment/create";

// Order Part
export const orderRoute = "/order";
