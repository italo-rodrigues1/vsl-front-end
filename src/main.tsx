import React from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import api from "./services/api";

const componentsError = () => {
  return <p>Ops... aconteceu um error </p>;
};

const notificationErrorFrontApi = async (message: any, code: any) => {
  try {
    const res = await api.post("/logs", {
      messageError: message,
      codeError: code,
      user: "teste",
    });
  } catch (error) {
    console.log("error", error);
  }
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary
        FallbackComponent={componentsError}
        onError={(message, code) => notificationErrorFrontApi(message, code)}
      >
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
