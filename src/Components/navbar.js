import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div
        id="navbar"
        style={
          this.props.mini
            ? {
                backgroundColor: "rgb(130, 130, 228)",
                borderBottom: "1px solid white",
              }
            : {}
        }
      >
        <div id="leftNav">
          <h1>ColorPicker</h1>
          {this.props.mini ? (
            ""
          ) : (
            <input
              onChange={this.props.handleRange}
              type="range"
              id="colorRange"
              defaultValue={500}
              max="900"
              step="100"
              min="100"
            />
          )}
        </div>
        {this.props.mini ? (
          <Link className="Link" to="/createPallete">
            Create pallete
          </Link>
        ) : (
          <select onChange={this.props.handleDropdown} id="colorChoose">
            <option value="hex">HEX Color</option>
            <option value="rgb">RGB</option>
            <option value="rgba">RGBa</option>
          </select>
        )}
      </div>
    );
  }
}

export default Navbar;
