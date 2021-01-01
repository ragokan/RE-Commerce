const initialState = {
  user: {},
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "FETCH_USER":
      return { ...state, user: payload };

    default:
      return state;
  }
}
