const barrehtml = new BarreChargement({
  target: document.getElementById("html"),
  max: 50,
});
const barrecss = new BarreChargement({
  target: document.getElementById("css"),
  max: 20,
});
const barrejs = new BarreChargement({
  target: document.getElementById("js"),
  max: 30,
});
const barrephp = new BarreChargement({
  target: document.getElementById("php"),
  max: 70,
});

document.addEventListener("scroll", () => {
  barrehtml.update();
  barrecss.update();
  barrejs.update();
  barrephp.update();
});
