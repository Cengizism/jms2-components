import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./Components/Page/Header";
import QueryBuilder from "./Components/QueryBuilder/QueryBuilder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/query-builder",
    element: <QueryBuilder />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Container fluid className="mx-auto p-0">
      <Header />
      <main className="m-2 p-2">
        <RouterProvider router={router} />
      </main>
    </Container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
