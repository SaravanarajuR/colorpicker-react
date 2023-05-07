import React, { Component } from "react";
import MiniPallete from "./miniPallete.js";

class Icon extends Component {
  render() {
    return <MiniPallete id={this.props.id} />;
  }
}

export default Icon;
