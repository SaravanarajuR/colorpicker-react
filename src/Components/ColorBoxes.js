import React, { Component } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/colorBoxes";

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
    }, 2000);
    this.setState({ clicked: true });
  };
  render() {
    const { classes } = this.props;
    return (
      <CopyToClipboard
        text={this.props[`${this.props.copyValue}`]}
        onCopy={this.handleClick}
      >
        <div
          style={{ backgroundColor: this.props.hex }}
          id={this.props.className}
          className={`${classes.container} ${classes[this.props.className]}`}
        >
          {this.props.mini ? (
            ""
          ) : (
            <div>
              <button className={classes.copyBtn}>
                {this.state.clicked ? "copied" : "copy"}
              </button>
              <span className={`name`}>{this.props.name}</span>
              {this.props.single ? (
                ""
              ) : (
                <Link to={`/seemore/${this.props.id}/${this.props.name}`}>
                  <p
                    className={classes.seemore}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    More
                  </p>
                </Link>
              )}
            </div>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBoxes);
