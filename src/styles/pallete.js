const styles = {
  alert: {
    visibility: " hidden",
    zIndex: "1000",
    position: "fixed",
    bottom: "20px",
    left: " 10px",
    backgroundColor: "black",
    color: " white",
    padding: "20px",
    animation: "0.5s move backwards",
  },
  palleteParent: {
    width: "100vw",
    height: "100vh",
  },
  pallete: {
    width: " 100%",
    height: " 85%",
    margin: "-5px 0",
    padding: "0",
    position: "relative",
    backgroundColor: "black",
  },
  footer: {
    backgroundColor: "white",
    height: "3%",
    width: "100%",
    color: "black",
    fontWeight: "900",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  footerFont: {
    alignSelf: "center",
  },
};

export default styles;
