import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import "./styles/MainComp.css";
import Main from "./components/MainComponent";

import NotFound from "./components/NotFound";
import Search from "./components/Search";
import Order from "./components/Order";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Register from "./components/contents/Register";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/order/*" element={<Order />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
