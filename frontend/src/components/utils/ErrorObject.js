import React from "react";
import { connect } from "react-redux";
import { Alert } from "antd";

const ErrorObject = ({ errors, dispatch }) => {
  const onClose = (id) => {
    dispatch({ type: "REMOVE_ERROR", payload: id });
  };
  return (
    <>
      {errors.map((error) => (
        <Alert
          key={error.id}
          message={error.message}
          type={error.errorType}
          closable
          onClose={() => onClose(error.id)}
          showIcon
          className="alertObject"
        />
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, null)(ErrorObject);
