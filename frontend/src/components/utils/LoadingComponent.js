import React from "react";
import "./Loader.css";

const LoadingComponent = () => {
  return (
    <>
      <div className="holder">
        <div className="lds-hourglass"></div>
      </div>
    </>
  );
};

export default LoadingComponent;
