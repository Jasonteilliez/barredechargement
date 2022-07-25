class BarreChargement {
  constructor({ target, max }) {
    this.target = target;
    this.max = max;
    this.interval = undefined;
  }

  start() {
    if (this.interval == undefined && this.target.value == 0) {
      this.interval = setInterval(this.increment.bind(this), 25);
    }
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  reset() {
    this.stop();
    this.target.value = 0;
  }

  increment() {
    if (this.target.value >= this.max) {
      this.stop();
    } else {
      this.target.value += 1;
    }
  }

  getTop() {
    return this.target.getBoundingClientRect().top;
  }

  update() {
    // start condition
    if (this.getTop() - window.innerHeight + 50 < 0 && this.target.value == 0) {
      this.start();
    }
    // reset condition
    if (this.getTop() - window.innerHeight > 50 && this.target.value != 0) {
      this.reset();
    }
  }
}
