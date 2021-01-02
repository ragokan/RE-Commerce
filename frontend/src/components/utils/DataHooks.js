import { connect } from "react-redux";
import React, { useEffect } from "react";
import { GetUserInfoAction } from "../../actions/AuthActions";
import { FetchProductsAction } from "../../actions/ProductActions";

const DataHooks = ({ GetUserInfoAction, FetchProductsAction }) => {
  useEffect(() => {
    GetUserInfoAction();
  }, [GetUserInfoAction]);
  useEffect(() => {
    FetchProductsAction();
  }, [FetchProductsAction]);
  return <></>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { GetUserInfoAction, FetchProductsAction };

export default connect(mapStateToProps, mapDispatchToProps)(DataHooks);
