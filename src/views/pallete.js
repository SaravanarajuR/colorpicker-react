import React, { Component } from "react";
import ColorBoxes from "../Components/ColorBoxes.js";
import Colors from "../Components/createPallete.js";
import Navbar from "../Components/navbar.js";
import { v4 } from "uuid";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/pallete.js";

class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contrast: 500,
      copyValue: "hex",
    };
  }
  handleRange = () => {
    return this.setState({
      contrast: document.getElementById("colorRange").value,
    });
  };
  handleDropdown = () => {
    document.getElementById("alert").style.visibility = "visible";
    document.getElementById("colorChoose").disabled = true;
    setTimeout(() => {
      document.getElementById("alert").style.visibility = "hidden";
      document.getElementById("colorChoose").disabled = false;
    }, 1000);
    return this.setState({
      copyValue: document.getElementById("colorChoose").value,
    });
  };

  colorPallete = () => {
    const colors = Colors(this.props.id).allcreated;
    return colors[this.state.contrast].map((k) => {
      return (
        <ColorBoxes
          allColors={colors}
          key={v4()}
          name={k.name}
          id={k.id}
          hex={k.hex}
          rgb={k.rgb}
          rgba={k.rgba}
          className="box"
          copyValue={this.state.copyValue}
        />
      );
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.palleteParent}>
        <div id="alert" className={classes.alert}>
          Format changed to {this.state.copyValue}
        </div>
        <Navbar
          handleRange={this.handleRange}
          handleDropdown={this.handleDropdown}
        />
        <div className={classes.pallete}>{this.colorPallete()}</div>
        <footer className={classes.footer}>
          <p className={classes.footerFont}>{Colors(this.props.id).id}</p>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(Pallete);
