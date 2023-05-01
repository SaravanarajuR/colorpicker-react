import React, { Component } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

class ColorBoxes extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }
  handleClick = () => {
    setTimeout(() => {
      this.setState({ clicked: false });
    }, 2000);
    this.setState({ clicked: true });
  };
  render() {
    return (
      <CopyToClipboard text={this.props.hex} onCopy={this.handleClick}>
        <div
          style={{ backgroundColor: this.props.hex }}
          id="box"
          className={`show ${this.state.clicked ? "center" : ""}`}
        >
          <div style={{ backgroundColor: this.props.hex }} />
          <button className={`copy-btn`}>
            {this.state.clicked ? "copied" : "copy"}
          </button>
          <span className={`name`}>{this.props.name}</span>
          <button className={`see-more`}>More</button>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBoxes;
