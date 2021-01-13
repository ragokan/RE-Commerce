import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouterContent from "./RouterContent";
import Routes from "./Routes.js";
import LoadingComponent from "../utils/LoadingComponent";
import { connect } from "react-redux";

const RouterComponent = ({ loading }) => {
  return (
    <>
      <Router>
        <Switch>
          <RouterContent>
            {loading && <LoadingComponent />}
            <Routes />
          </RouterContent>
        </Switch>
      </Router>
    </>
  );
};

const mapStateToProps = (state) => ({ loading: state.loading });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RouterComponent);
