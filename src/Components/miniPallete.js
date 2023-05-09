import React, { Component } from "react";
import ColorBoxes from "./ColorBoxes.js";
import Colors from "./createPallete.js";
import { v4 } from "uuid";
import ColorArrays from "./seedColors.js";
import { withStyles } from "@material-ui/styles";

const styles = {
  main: {
    height: "130px",
    width: "180px",
    backgroundColor: " white",
    margin: "20px",
    padding: "10px",
    display: "inline-block",
    borderRadius: " 0 0 10px 10px",
    color: "black",
  },
  topic: {
    color: "black",
  },
  inner: {
    width: "99%",
    height: "70%",
    overflow: "hidden",
  },
};

class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contrast: 600,
      copyValue: "",
      name: "",
      emoji: "",
    };
  }

  componentDidMount() {
    const color = ColorArrays.filter((k) => {
      if (k.id === this.props.id) {
        return 1;
      } else {
        return 0;
      }
    })[0];
    this.setState({ name: color.paletteName, emoji: color.emoji });
  }

  colorPallete = () => {
    const colors = Colors(this.props.id).allcreated;
    return colors[this.state.contrast].map((k) => {
      return (
        <ColorBoxes
          key={v4()}
          hex={k.hex}
          copyValue={this.state.copyValue}
          mini={true}
        />
      );
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <div className={classes.inner}>{this.colorPallete()}</div>
        <div className="nameEmoji">
          <p className={classes.topic}>{this.state.name}</p>
          <p className={classes.topic}>{this.state.emoji}</p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Pallete);
