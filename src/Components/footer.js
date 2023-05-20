import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/footer";

class Footer extends Component {
  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.footer}>
        <p className={classes.footerFont}>{children}</p>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
