const initialState = {
  user: null,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "FETCH_USER":
      return { ...state, user: payload };

    case "LOGIN_ERROR":
      return { ...state, user: null };

    case "LOGOUT_USER":
      return { ...state, user: null };

    case "UPDATE_BASKET":
      return { ...state, user: { ...state.user, basket: payload } };

    default:
      return state;
  }
}
