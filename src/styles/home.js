const styles = {
  homeParent: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgb(130, 130, 228)",
  },
  home: {
    width: "80%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 27%)",
    gap: "5%",
  },
  homeOuter: {
    overflow: "auto",
    justifyContent: "center",
    width: "100%",
    display: "flex",
    height: " 87%",
  },
  Link: {
    textDecoration: "none",
    fontSize: " 1rem",
    color: "#fff",
  },
};

export default styles;
