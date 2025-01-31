import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Nav from "./component/nav/Nav";
import CategoryNews from "./pages/home/categoryNews/categoryNews";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategoryNews />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
