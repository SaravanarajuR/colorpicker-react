import { Component } from "react";
import Colors from "./seedColors.js";
import NavIcon from "./palleteIcons.js";

class Home extends Component {
  handleRender = () => {
    return Colors.map((k) => {
      return (
        <a href={`pallete/${k.id}`}>
          <NavIcon id={k.id} />
        </a>
      );
    });
  };
  render() {
    return <div className="home">{this.handleRender()}</div>;
  }
}

export default Home;
