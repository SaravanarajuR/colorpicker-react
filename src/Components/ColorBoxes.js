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
    }, 1600);
    this.setState({ clicked: true });
  };
  render() {
    return (
      <CopyToClipboard text={this.props.color} onCopy={this.handleClick}>
        <div style={{ backgroundColor: this.props.color }} className="colorBox">
          <div
            style={{ backgroundColor: this.props.color }}
            className={`${this.state.clicked ? "show" : "fill"}`}
          />
          <div className="box-contents">
            <button className="copy-btn">Copy</button>
            <span className="name">{this.props.name}</span>
            <button className="see-more">More</button>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBoxes;
