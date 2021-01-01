const initialState = {
  user: {},
  token: null,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_USER":
      return { ...state, user: payload };

    default:
      return state;
  }
}
