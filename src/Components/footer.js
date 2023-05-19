import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/home";

class Footer extends Component {
  render() {
    const { classes, color } = this.props;
    return (
      <div style={{ backgroundColor: color }} className={classes.footer}></div>
    );
  }
}

export default withStyles(styles)(Footer);
