class Chimpanzee {
    constructor(value, positionX, positionY) {
        this.value = value;
        this.name = 'chimpanzee';
        this.img = './img/chimpanzee.png';
        this.speed = 20;
        this.health = 40;
        this.positionX = positionX;
        this.positionY = positionY;
    }
    move() {
        setInterval(() => {
            this.positionX += this.speed;
        }, 1000);
    }
    hitted(damage) {
        this.health -= damage;
        if (this.health === 0) {
            this.remove();
        }
    }
    remove() {
        console.log('remove')
    }
}

export { Chimpanzee }