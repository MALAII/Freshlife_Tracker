import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GroceryProvider } from "./context/GroceryContext";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <GroceryProvider>
      <App />
      <ToastContainer position="top-right" autoClose={5000}/>
    </GroceryProvider>
  </AuthProvider>
);
