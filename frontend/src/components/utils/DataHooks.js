import { connect } from "react-redux";
import React, { useEffect } from "react";
import { GetUserInfoAction } from "../../actions/AuthActions";

const DataHooks = ({ GetUserInfoAction }) => {
  useEffect(() => {
    GetUserInfoAction();
  }, [GetUserInfoAction]);
  return <></>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { GetUserInfoAction };

export default connect(mapStateToProps, mapDispatchToProps)(DataHooks);
