import { enemyQueue } from "../BattleGround/enemy.js";
import { entrances } from "../BattleGround/fieldData.js";
const towers = ["singleshot", "doubleshot", "wall", "rangeshot", "lasershot", "slow"];

class SingleShot {
  constructor() {
    this.type = "singleshot";
    this.img = "./img/singleshot.png";
    this.mineral = 100;
    this.gas = 0;
    this.attackIntervalId = null;
    this.moveBombIntervalId = null;
  }
  remove() {
    console.log("delete");
  }
  attack() {
    // 500초 마다 포탄 발사
    this.attackIntervalId = setInterval(() => {
      const bombFire = document.createElement("img");
      bombFire.classList.add("bombFire");

      if (enemyQueue.length !== 0) {
        // 폭발 효과
        setTimeout(() => {
          //첫번째적
          const firstEnemy = document.querySelectorAll(".entrance")[0].children[0];
          // 첫번째 적에 폭발 이미지 부착
          firstEnemy.insertBefore(bombFire, firstEnemy.firstChild);
          // 0.2 초후 폭발 이미지 제거
          (function () {
            setTimeout(() => {
              firstEnemy.firstChild.remove();
            }, 200);
          })();
        }, 500);
        // 적의 hp를 줄인다.
        enemyQueue[0].hitted(10);
      }
    }, 1000);
  }
}

class DoubleShot {
  constructor() {
    this.type = "doubleshot";
    this.img = "./img/doubleshot.png";
    this.mineral = 200;
    this.gas = 0;
  }
  remove() {
    console.log("delete");
  }
}

class Wall {
  constructor() {
    this.type = "wall";
    this.img = "./img/wall.png";
    this.mineral = 200;
    this.gas = 0;
  }
  remove() {
    console.log("delete");
  }
}

class RangeShot {
  constructor() {
    this.type = "rangeshot";
    this.img = "./img/rangeshot.png";
    this.mineral = 400;
    this.gas = 100;
  }
  remove() {
    console.log("delete");
  }
}

class LaserShot {
  constructor() {
    this.type = "lasershot";
    this.img = "./img/lasershot.png";
    this.mineral = 1000;
    this.gas = 500;
  }
  remove() {
    console.log("delete");
  }
}

class Slow {
  constructor() {
    this.type = "slow";
    this.img = "./img/slow.png";
    this.mineral = 500;
    this.gas = 150;
  }
  remove() {
    console.log("delete");
  }
}

export { SingleShot, DoubleShot, Wall, RangeShot, LaserShot, Slow, towers };
