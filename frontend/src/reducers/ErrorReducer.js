const initialState = [];

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_ERROR":
      return [...state, payload];
    case "REMOVE_ERROR":
      return state.filter((error) => error.id !== payload);

    default:
      return state;
  }
}
