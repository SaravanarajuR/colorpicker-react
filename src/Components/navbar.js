import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <div id="leftNav">
          <h1>ColorPicker</h1>
          <input
            onChange={this.props.handleRange}
            type="range"
            id="colorRange"
            max="900"
            step="100"
            min="100"
          />
        </div>
        <select onChange={this.props.handleDropdown} id="colorChoose">
          <option value="hex">HEX Color</option>
          <option value="rgb">RGB</option>
          <option value="rgba">RGBa</option>
        </select>
      </div>
    );
  }
}

export default Navbar;
