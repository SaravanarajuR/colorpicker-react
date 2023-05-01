import React, { Component } from "react";
import ColorBoxes from "./ColorBoxes.js";
import Colors from "./createPallete.js";
import Navbar from "./navbar.js";

class pallete extends Component {
  constructor() {
    super();
    this.state = {
      contrast: 100,
    };
  }
  handleRange = () => {
    return this.setState({
      contrast: document.getElementById("colorRange").value,
    });
  };
  colorPallete = () => {
    const colors = Colors();
    return colors[this.state.contrast].map((k) => {
      console.log(k);
      return <ColorBoxes name={k.name} hex={k.hex} rgb={k.rgb} rgba={k.rgba} />;
    });
  };
  render() {
    return (
      <div>
        <Navbar handleRange={this.handleRange} />
        <div className="pallete">{this.colorPallete()}</div>
      </div>
    );
  }
}

export default pallete;
