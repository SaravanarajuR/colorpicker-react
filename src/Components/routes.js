import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Pallete from "./pallete.js";
import Home from "./home.js";

class Paths extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route
            exact
            path="/pallete/:id"
            element={<Pallete id={window.location.pathname.split("/")[2]} />}
          />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default Paths;
