const style = {
  container: {
    "&:hover button": {
      animation: "0.3s appear forwards",
      visibility: "visible",
    },
  },
  seemore: {
    background: "rgb(255, 255, 255, 0.6)",
    border: " none",
    textDecoration: "none",
    width: "40px",
    height: "20px",
    position: "absolute",
    bottom: "-10px",
    color: "black",
    fontWeight: "600",
    right: "0",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  copyBtn: {
    width: "60px",
    height: "30px",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: "-30px",
    marginTop: "-15px",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    border: " none",
    visibility: "hidden",
  },
  single: {
    height: " 40%",
    width: " 20%",
    marginBottom: "-5px",
    display: "inline-block",
    position: "relative",
  },
  box: {
    width: "25%",
    height: "20%",
    marginBottom: "-5px",
    display: "inline-block",
    position: " relative",
  },
  name: {
    position: "absolute",
    bottom: " 0",
    left: "3px",
    fontSize: "1rem",
    fontWeight: "500",
  },
  black: {
    color: "black",
  },
  white: {
    color: "rgba(255,255,255,0.9)",
  },
};

export default style;
