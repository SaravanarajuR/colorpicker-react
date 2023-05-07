import React, { Component } from "react";
import ColorBoxes from "./ColorBoxes.js";
import Colors from "./createPallete.js";
import { v4 } from "uuid";
import ColorArrays from "./seedColors.js";

class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contrast: 600,
      copyValue: "",
      name: "",
      emoji: "",
    };
  }

  componentDidMount() {
    const color = ColorArrays.filter((k) => {
      if (k.id === this.props.id) {
        return 1;
      } else {
        return 0;
      }
    })[0];
    this.setState({ name: color.paletteName, emoji: color.emoji });
  }

  colorPallete = () => {
    const colors = Colors(this.props.id).allcreated;
    return colors[this.state.contrast].map((k) => {
      return (
        <ColorBoxes
          key={v4()}
          hex={k.hex}
          copyValue={this.state.copyValue}
          mini={true}
        />
      );
    });
  };
  render() {
    return (
      <div className="miniPallete">
        <div className="miniPalleteInner">{this.colorPallete()}</div>
        <div className="nameEmoji">
          <p>{this.state.name}</p>
          <p>{this.state.emoji}</p>
        </div>
      </div>
    );
  }
}

export default Pallete;
