import { Component } from "react";
import Colors from "../Components/seedColors";
import NavIcon from "../Components/palleteIcons";
import Navbar from "../Components/navbar.js";
import Footer from "../Components/footer.js";

class Home extends Component {
  handleRender = () => {
    return Colors.map((k) => {
      return (
        <a className="Link" href={`pallete/${k.id}`}>
          <NavIcon id={k.id} />
        </a>
      );
    });
  };
  render() {
    return (
      <div className="home-parent">
        <Navbar mini={true} />
        <div className="home-outer">
          <div className="home">{this.handleRender()}</div>
        </div>
        <Footer color={"white"} />
      </div>
    );
  }
}

export default Home;
