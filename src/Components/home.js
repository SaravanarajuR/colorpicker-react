import { Component } from "react";
import colors from "./seedColors.js";
import { NavLink } from "react-router-dom";

class Home extends Component {
  handleRender = () => {
    return colors.map((k) => {
      return <NavLink to={`pallete/${k.id}`}>{k.paletteName}</NavLink>;
    });
  };
  render() {
    return (
      <div>
        <div>{this.handleRender()}</div>
      </div>
    );
  }
}

export default Home;
