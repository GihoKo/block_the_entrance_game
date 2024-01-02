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

export { Chimpanzee };
