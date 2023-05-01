import chroma from "chroma-js";

let pallette = {
  paletteName: "Flat UI Colors Spanish",
  id: "flat-ui-colors-spanish",
  emoji: "🇪🇸",
  colors: [
    { name: "JacksonsPurple", color: "#40407a" },
    { name: "C64Purple", color: "#706fd3" },
    { name: "SwanWhite", color: "#f7f1e3" },
    { name: "SummerSky", color: "#34ace0" },
    { name: "CelestialGreen", color: "#33d9b2" },
    { name: "LuckyPoint", color: "#2c2c54" },
    { name: "Liberty", color: "#474787" },
    { name: "HotStone", color: "#aaa69d" },
    { name: "DevilBlue", color: "#227093" },
    { name: "PalmSpringsSplash", color: "#218c74" },
    { name: "FlourescentRed", color: "#ff5252" },
    { name: "SyntheticPumpkin", color: "#ff793f" },
    { name: "CrocodileTooth", color: "#d1ccc0" },
    { name: "MandarinSorbet", color: "#ffb142" },
    { name: "SpicedButterNut", color: "#ffda79" },
    { name: "EyeOfNewt", color: "#b33939" },
    { name: "ChileanFire", color: "#cd6133" },
    { name: "GreyPorcelain", color: "#84817a" },
    { name: "AlamedaOchre", color: "#cc8e35" },
    { name: "Desert", color: "#ccae62" },
  ],
};

function getRange(color) {
  return [chroma(color).darken(1.4), color, "#fff"];
}
function allPallete() {
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
        name: pallette.colors[i].name,
        hex: created[i][j],
        rgb: chroma(created[i][j]).css(),
        rgba: chroma(created[i][j]).css().replace(")", ",0.1)"),
      });
    }
  }
  return allcreated;
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
