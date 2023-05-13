import chroma from "chroma-js";
import allColors from "./seedColors.js";

function getRange(color) {
  return [chroma(color).darken(1.4), color, "#fff"];
}
function allPallete(id) {
  let pallette = allColors.filter((k) => {
    if (k.id === id) {
      return 1;
    } else {
      return 0;
    }
  })[0];
  const allcreated = {};
  const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  const created = pallette.colors.map((k) => {
    return createPallete(k.color);
  });
  for (let j = 0; j < levels.length; j++) {
    allcreated[levels[j]] = [];
  }

  for (let j = 0; j < levels.length; j++) {
    for (let i = 0; i < created.length; i++) {
      allcreated[levels[j]].push({
        name: pallette["colors"][i].name,
        hex: created[i][j],
        rgb: chroma(created[i][j]).css(),
        rgba: chroma(created[i][j])
          .css()
          .replace(")", ",0.1)")
          .replace("rgb", "rgba"),
        id: id,
      });
    }
  }
  return { id: pallette.paletteName, allcreated: allcreated };
}

function createPallete(color) {
  let n = getScales(color);
  return n.reverse();
}

function getScales(color) {
  const range = getRange(color);
  return chroma.scale(range).colors(10);
}

export default allPallete;
