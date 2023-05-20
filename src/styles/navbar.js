const styles = {
  mini: {
    backgroundColor: "rgb(130, 130, 228)",
    borderBottom: "1px solid white",
  },
  leftNav: {
    padding: "5px 10px",
    display: "flex",
    width: "50%",
    gap: "30px",
  },
  colorChoose: {
    borderRadius: "6px",
    border: "1px solid black",
    height: "40px",
    width: "150px",
    backgroundColor: " black",
    color: "white",
    padding: "2px 10px",
    "&:hover": {
      borderBottom: "2px solid blueviolet",
      animation: " 0.3s grow forwards",
    },
  },
  Link: {
    textDecoration: "none",
    fontSize: " 1rem",
    color: "#fff",
  },
  navbar: {
    display: "flex",
    height: "10%",
    padding: "0 19px",
    justifyContent: "space-between",
    alignItems: " center",
    zIndex: "100",
    position: "relative",
    margin: "0 10px",
  },
};

export default styles;
