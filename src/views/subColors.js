import React, { Component } from "react";
import ColorBoxes from "../Components/ColorBoxes";
import Colors from "../Components/createPallete";
import { withStyles } from "@material-ui/styles";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import styles from "../styles/subcolors";

class subColors extends Component {
  constructor() {
    super();
    this.state = {
      copyValue: "hex",
      color: window.location.pathname.split("/")[3],
    };
  }
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
  handleRender = () => {
    const colorId = Colors(window.location.pathname.split("/")[2]).allcreated;
    const color = window.location.pathname.split("/")[3];
    let choosenColors = [];
    for (let l = 100; l <= 900; l += 100) {
      for (let i = 0; i < Object.keys(colorId).length; i++) {
        if (color === colorId[l][i].name) {
          choosenColors.push({
            name: `${colorId[l][i].name} ${l}`,
            rgb: colorId[l][i].rgb,
            hex: colorId[l][i].hex,
            rgba: colorId[l][i].rgba,
          });
        }
      }
    }
    return choosenColors.map((q) => {
      return (
        <ColorBoxes
          name={q.name}
          hex={q.hex}
          rgb={q.rgb}
          rgba={q.rgba}
          single={true}
          className={"single"}
          copyValue={this.state.copyValue}
        />
      );
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <div className={classes.alert} id="alert">
          Format changed to {this.state.copyValue}
        </div>
        <Navbar single={true} handleDropdown={this.handleDropdown} />
        <div className={classes.box}>{this.handleRender()}</div>
        <Footer color={"white"}>{this.state.color.toUpperCase()}</Footer>
      </div>
    );
  }
}

export default withStyles(styles)(subColors);
