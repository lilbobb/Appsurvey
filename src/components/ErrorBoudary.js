import React, { Component } from "react";
import { Link } from "react-router-dom";

// Function to report errors to the server
function reportError(error, info) {
  // Send error to server
}

class ErrorBoundary extends Component {
  state = { hasError: false };

  // Catch errors and update state
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    reportError(error, info);
  }

  render() {
    return this.state.hasError ? (
      <div className="flex items-center justify-center h-screen text-gray-800 font-bold text-3xl">
        Oops! Something went wrong.
        <Link to="/">Go back</Link>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
