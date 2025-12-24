import React from "react";
import Home from "./page/Home/Home";
import { Routes, Route } from "react-router";
import Login from "./page/Login/Login";
import Player from "./page/Player/Player";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
