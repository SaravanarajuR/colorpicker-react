import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Pallete from "./pallete.js";
import Home from "./home.js";

class Paths extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/pallete/:id" element={<Pallete />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default Paths;
