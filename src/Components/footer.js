import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div
        style={{ backgroundColor: this.props.color }}
        className="footer"
      ></div>
    );
  }
}
