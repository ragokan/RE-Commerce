export const SetLoading = (status) => (dispatch) => {
  dispatch({
    type: "LOADING",
    payload: status,
  });
};
