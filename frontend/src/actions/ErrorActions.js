export const AddErrorAction = (msg, errorType, timeout = 3000) => (dispatch) => {
  const id = Math.floor(Math.random() * 120312030123895);
  dispatch({
    type: "ADD_ERROR",
    payload: { msg, errorType, id },
  });

  setTimeout(() => dispatch({ type: "REMOVE_ERROR", payload: id }), timeout);
};
