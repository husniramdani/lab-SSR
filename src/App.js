import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div className="app">
      <h1>Hello Mom</h1>
      <Link to="/" style={{ marginRight: 20, fontSize: 18 }}>
        Home
      </Link>
      <Link to="/about" style={{ fontSize: 18 }}>
        About
      </Link>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
};

export default App;
