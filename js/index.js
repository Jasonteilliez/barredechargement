const barrehtml = new BarreChargement({
  target: document.getElementById("html"),
  max: 80,
});
const barrecss = new BarreChargement({
  target: document.getElementById("css"),
  max: 80,
});
const barrejs = new BarreChargement({
  target: document.getElementById("js"),
  max: 30,
});
const barrephp = new BarreChargement({
  target: document.getElementById("php"),
  max: 50,
});

document.addEventListener("scroll", () => {
  barrehtml.update();
  barrecss.update();
  barrejs.update();
  barrephp.update();
});
