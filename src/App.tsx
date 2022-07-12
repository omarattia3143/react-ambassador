import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsFrontend from "./pages/ProductsFrontend";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsFrontend />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
