const initialState = {
  products: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "FETCH_PRODUCTS":
      return { ...state, products: payload };

    default:
      return state;
  }
}
