import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import App from "./app";
import { basename } from "./config";

console.log("hello");

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
