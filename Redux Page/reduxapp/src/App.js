import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import "./App.css";

const routerPaths = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);

function App() {
  return <RouterProvider router={routerPaths} />;
}

export default App;
