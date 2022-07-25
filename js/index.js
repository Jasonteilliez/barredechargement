barrehtml = new BarreChargement({
  target: document.getElementById("html"),
  max: 50,
});
barrecss = new BarreChargement({
  target: document.getElementById("css"),
  max: 20,
});
barrejs = new BarreChargement({
  target: document.getElementById("js"),
  max: 30,
});
barrephp = new BarreChargement({
  target: document.getElementById("php"),
  max: 70,
});

document.addEventListener("scroll", () => {
  barrehtml.update();
  barrecss.update();
  barrejs.update();
  barrephp.update();
});
