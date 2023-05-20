import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/navbar";

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div
        className={`${classes.navbar} ${this.props.mini ? classes.mini : ""}`}
      >
        <div className={classes.leftNav}>
          <h1>ColorPicker</h1>
          {this.props.mini || this.props.single ? (
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
          <Link className={classes.Link} to="/createPallete">
            Create pallete
          </Link>
        ) : (
          <select
            onChange={this.props.handleDropdown}
            id="colorChoose"
            className={classes.colorChoose}
          >
            <option value="hex">HEX Color</option>
            <option value="rgb">RGB</option>
            <option value="rgba">RGBa</option>
          </select>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
