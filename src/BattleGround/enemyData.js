import { enemyQueue, removeEnemyInEnemyQueue } from "./enemy.js";

const enemyQueueBtn = document.querySelector(".enemyQueue");
enemyQueueBtn.addEventListener("click", () => {
  console.log(enemyQueue);
});

class Chimpanzee {
  constructor(enemyId, positionX, positionY) {
    this.enemyId = enemyId;
    this.name = "chimpanzee";
    this.img = "./img/chimpanzee.png";
    this.speed = 40;
    this.health = 40;
    this.positionX = positionX;
    this.positionY = positionY;
    // class에서 dom까지 조작하는게 좋지않나?
    this.domElement = null;
  }
  move() {
    setInterval(() => {
      this.positionX += this.speed;
    }, 1000);
  }
  hitted(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      this.remove();
    }
  }
  remove() {
    const currentEnemy = document.querySelector(`#enemy-${this.enemyId}`);
    currentEnemy.remove();
    removeEnemyInEnemyQueue(this.enemyId);
  }
}

class Orangutan {
  constructor(enemyId, positionX, positionY) {
    this.enemyId = enemyId;
    this.name = "orangutan";
    this.img = "./img/orangutan.png";
    this.speed = 20;
    this.health = 80;
    this.positionX = positionX;
    this.positionY = positionY;
    // class에서 dom까지 조작하는게 좋지않나?
    this.domElement = null;
  }
  move() {
    setInterval(() => {
      this.positionX += this.speed;
    }, 1000);
  }
  hitted(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      this.remove();
    }
  }
  remove() {
    const currentEnemy = document.querySelector(`#enemy-${this.enemyId}`);
    currentEnemy.remove();
    removeEnemyInEnemyQueue(this.enemyId);
  }
}

class Gorilla {
  constructor(enemyId, positionX, positionY) {
    this.enemyId = enemyId;
    this.name = "gorilla";
    this.img = "./img/gorilla.png";
    this.speed = 20;
    this.health = 160;
    this.positionX = positionX;
    this.positionY = positionY;
    // class에서 dom까지 조작하는게 좋지않나?
    this.domElement = null;
  }
  move() {
    setInterval(() => {
      this.positionX += this.speed;
    }, 1000);
  }
  hitted(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      this.remove();
    }
  }
  remove() {
    const currentEnemy = document.querySelector(`#enemy-${this.enemyId}`);
    currentEnemy.remove();
    removeEnemyInEnemyQueue(this.enemyId);
  }
}

export { Chimpanzee, Orangutan, Gorilla };
