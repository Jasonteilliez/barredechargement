class BarreChargement {
  constructor({ target, max, speed=50, offsetstart=50, offsetstop=50, retard=1000 }) {
    this.target = target;
    this.max = max;
    this.speed = speed;
    this.interval = undefined;
    this.offsetstart = offsetstart;
    this.offsetstop = offsetstop; 
    this.retard = retard;
  }

  start() {
    if (this.interval == undefined && this.target.value == 0) {
      this.interval = setInterval(this.increment.bind(this), this.speed);
    }
  }

  delay() {
    setTimeout(this.start.bind(this), this.retard);
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
    if (this.getTop() - window.innerHeight + this.offsetstart < 0 && this.target.value == 0) {
      this.delay();
    }
    // reset condition
    if (this.getTop() - window.innerHeight > this.offsetstop && this.target.value != 0) {
      this.reset();
    }
  }
}
