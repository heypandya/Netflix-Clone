import React from "react";
import Home from "./page/Home/Home";
import { Routes, Route } from "react-router";
import Login from "./page/Login/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
