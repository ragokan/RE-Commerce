export const AddErrorAction = (message, errorType, timeout = 5000) => (dispatch) => {
  const id = Math.floor(Math.random() * 120312030123895);
  dispatch({
    type: "ADD_ERROR",
    payload: { message, errorType, id },
  });

  setTimeout(() => dispatch({ type: "REMOVE_ERROR", payload: id }), timeout);
};
