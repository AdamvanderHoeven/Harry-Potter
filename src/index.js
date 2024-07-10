import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Homepage from "./Homepage";
import Books from "./components/Books";
import Characters from "./components/Characters";
import BookDetails from "./components/BookDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Spells from "./components/Spells";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/characters",
        element: <Characters />,
      },
      {
        path: "/spells",
        element: <Spells />,
      },
      {
        path: "/books/:title",
        element: <BookDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
