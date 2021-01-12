import React from "react";
import { Result, Button } from "antd";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log("Error boundary did catch an error, details: ", error, errorInfo);
  }
  render() {
    if (this.state.hasError)
      return (
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
          extra={
            <Button type="primary" href="/">
              Back Home
            </Button>
          }
        />
      );
    return this.props.children;
  }
}

export default ErrorBoundary;

// This boundary is from Stackoverflow.
