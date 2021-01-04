const initialState = {
  products: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "FETCH_PRODUCTS":
      return { ...state, products: payload };

    case "SELLER_ADD_PRODUCT":
      return { ...state, products: [payload, ...state.products] };

    case "SELLER_REMOVE_PRODUCT":
      return { ...state, products: state.products.filter((item) => item._id !== payload) };

    default:
      return state;
  }
}
