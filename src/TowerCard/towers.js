import { enemyQueue } from "../BattleGround/enemy.js";
const towers = ["singleshot", "doubleshot", "wall", "rangeshot", "lasershot", "slow"];

const renewalLastAttackTimeStamp = (lastAttackTimeStamp, currentTimeStamp) => {
  return (lastAttackTimeStamp = currentTimeStamp);
};

class SingleShot {
  constructor() {
    this.type = "singleshot";
    this.img = "./img/singleshot.png";
    this.mineral = 100;
    this.gas = 0;
    this.lastAttackTimeStamp = 0;
    this.attackSpeed = 1500;
  }
  remove() {
    console.log("delete");
  }
  attack() {
    const renewalLastAttackTimeStamp = (currentTimeStamp) => {
      return (this.lastAttackTimeStamp = currentTimeStamp);
    };
    const performAnimation = (currentTimeStamp) => {
      if (currentTimeStamp - this.lastAttackTimeStamp >= this.attackSpeed) {
        const singleshotBombFire = document.createElement("img");
        singleshotBombFire.classList.add("singleshotBombFire");
        // 폭발효과 부착
        //첫번째적
        const firstEnemy = document.querySelectorAll(".entrance")[0].children[0];
        // 첫번째 적에 폭발 이미지 부착
        firstEnemy.insertBefore(singleshotBombFire, firstEnemy.firstChild);
        // 1 초후 폭발 이미지 제거
        setTimeout(() => {
          firstEnemy.firstChild.remove();
        }, 500);
        enemyQueue[0].damaged(10);
        renewalLastAttackTimeStamp(currentTimeStamp);
      }
      requestAnimationFrame(performAnimation);
    };
    requestAnimationFrame(performAnimation);
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
    this.lastAttackTimeStamp = 0;
    this.attackSpeed = 1500;
  }
  remove() {
    console.log("delete");
  }
  attack() {
    const renewalLastAttackTimeStamp = (currentTimeStamp) => {
      return (this.lastAttackTimeStamp = currentTimeStamp);
    };
    const performAnimation = (currentTimeStamp) => {
      if (currentTimeStamp - this.lastAttackTimeStamp >= this.attackSpeed) {
        const rangeshotBombFire1 = document.createElement("img");
        rangeshotBombFire1.classList.add("rangeshotBombFire");
        const rangeshotBombFire2 = document.createElement("img");
        rangeshotBombFire2.classList.add("rangeshotBombFire");
        const rangeshotBombFire3 = document.createElement("img");
        rangeshotBombFire3.classList.add("rangeshotBombFire");
        const rangeshotBombFire4 = document.createElement("img");
        rangeshotBombFire4.classList.add("rangeshotBombFire");
        // ?. 연산자의 경우 enemyQueue의 length가 4보다 작을 때 에러를 발생시킬 수 있으니 사용
        const firstEnemy = document?.querySelectorAll(".entrance")[0].children[0];
        const secondEnemy = document?.querySelectorAll(".entrance")[0].children[1];
        const thirdEnemy = document?.querySelectorAll(".entrance")[0].children[2];
        const fourthEnemy = document?.querySelectorAll(".entrance")[0].children[3];
        // 첫번째 적에 폭발 이미지 부착
        firstEnemy?.insertBefore(rangeshotBombFire1, firstEnemy?.firstChild);
        secondEnemy?.insertBefore(rangeshotBombFire2, secondEnemy?.firstChild);
        thirdEnemy?.insertBefore(rangeshotBombFire3, thirdEnemy?.firstChild);
        fourthEnemy?.insertBefore(rangeshotBombFire4, fourthEnemy?.firstChild);
        // 적의 hp를 줄인다.
        for (let i = 0; i < 4; i++) {
          enemyQueue[i]?.damaged(15);
        }
        // 0.5 초후 폭발 이미지 제거
        setTimeout(() => {
          rangeshotBombFire1.remove();
          rangeshotBombFire2.remove();
          rangeshotBombFire3.remove();
          rangeshotBombFire4.remove();
        }, 500);
        renewalLastAttackTimeStamp(currentTimeStamp);
      }
      requestAnimationFrame(performAnimation);
    };
    requestAnimationFrame(performAnimation);
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
