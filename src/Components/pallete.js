import React, { Component } from "react";
import Colors from "./seedColors.js";
import ColorBoxes from "./ColorBoxes.js";

class pallete extends Component {
  colorPallete = () => {
    return Colors[0].colors.map((k) => {
      return <ColorBoxes name={k.name} color={k.color} />;
    });
  };
  render() {
    return <div className="pallete">{this.colorPallete()}</div>;
  }
}

export default pallete;
