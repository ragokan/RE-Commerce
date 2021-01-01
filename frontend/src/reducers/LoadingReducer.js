const initialState = false;

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "LOADING":
      return payload;

    default:
      return state;
  }
}
