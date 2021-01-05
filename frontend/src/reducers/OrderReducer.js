const initialState = {
  orders: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "FETCH_ORDERS":
      return { ...state, orders: payload };

    case "ADD_ORDER":
      return { ...state, orders: [payload, ...state.orders] };

    default:
      return state;
  }
}
