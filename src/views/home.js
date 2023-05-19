import { Component } from "react";
import Colors from "../Components/seedColors";
import NavIcon from "../Components/palleteIcons";
import Navbar from "../Components/navbar.js";
import Footer from "../Components/footer.js";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/home";
class Home extends Component {
  handleRender = () => {
    const { classes } = this.props;
    return Colors.map((k) => {
      return (
        <a className={classes.Link} href={`pallete/${k.id}`}>
          <NavIcon id={k.id} />
        </a>
      );
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.homeParent}>
        <Navbar mini={true} />
        <div className={classes.homeOuter}>
          <div className={classes.home}>{this.handleRender()}</div>
        </div>
        <Footer color={"white"} />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
