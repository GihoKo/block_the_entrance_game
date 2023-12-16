const towers = ['singleshot', 'doubleshot', 'wall', 'rangeshot', 'lasershot', 'slow'];

class SingleShot {
    constructor(cell) {
        this.cell = cell;
        this.type = 'singleshot';
        this.img = './img/singleshot.png'
        this.mineral = 100;
        this.gas = 0;
    }
    remove() {
        console.log('delete');
    }
}

class DoubleShot {
    constructor(cell) {
        this.cell = cell;
        this.type = 'doubleshot';
        this.img = './img/doubleshot.png'
        this.mineral = 200;
        this.gas = 0;
    }
    remove() {
        console.log('delete');
    }
}

class Wall {
    constructor(cell) {
        this.cell = cell;
        this.type = 'wall';
        this.img = './img/wall.png'
        this.mineral = 200;
        this.gas = 0;
    }
    remove() {
        console.log('delete');
    }
}

class RangeShot {
    constructor(cell) {
        this.cell = cell;
        this.type = 'rangeshot';
        this.img = './img/rangeshot.png'
        this.mineral = 400;
        this.gas = 100;
    }
    remove() {
        console.log('delete');
    }
}

class LaserShot {
    constructor(cell) {
        this.cell = cell;
        this.type = 'lasershot';
        this.img = './img/lasershot.png'
        this.mineral = 1000;
        this.gas = 500;
    }
    remove() {
        console.log('delete');
    }
}

class Slow {
    constructor(cell) {
        this.cell = cell;
        this.type = 'slow';
        this.img = './img/slow.png'
        this.mineral = 500;
        this.gas = 150;
    }
    remove() {
        console.log('delete');
    }
}

export { SingleShot, DoubleShot, Wall, RangeShot, LaserShot, Slow, towers }