import { Chimpanzee } from "./enemyData.js";
import { battlegroundFeild } from "./fieldData.js";
import { enterEntrance, exitEntrance, battlegroundCells } from "./battlegroundRender.js";

// 적 생성 함수
let enemyQueue = [];
let gameTimeStamp = document.querySelector(".status-bar__time-stamp");
let enemyId = 0;

const removeEnemyInEnemyQueue = (currentEnemyId) => {
  enemyQueue = enemyQueue.filter((enemy) => enemy.enemyId !== currentEnemyId);
};

const enemyMove = () => {
  // 실시간 enemy 렌더링
  enemyQueue.forEach((enemy, i) => {
    try {
      let nowEnemy = document.querySelector(`#enemy-${enemy.enemyId}`);
      nowEnemy.style.left = `${enemy.positionX}px`;
      nowEnemy.style.top = `${enemy.positionY}px`;
      if (document.querySelector(`#enemy-${enemy.enemyId}`).getBoundingClientRect().right > 895) {
        document.querySelector(".defeat").style.display = "flex";
        clearInterval(newEnemyIntervalId);
        return defeat();
      }
    } catch (error) {
      console.error(error);
      console.log(nowEnemy);
    }
  });
};

const renewalTimer = (timeStamp) => {
  // status bar time stamp
  gameTimeStamp.textContent = `TIME : ${Math.floor(timeStamp / 1000)}초`;
};

const performAnimation = (timeStamp) => {
  renewalTimer(timeStamp);
  enemyMove();
  requestAnimationFrame(performAnimation);
};
requestAnimationFrame(performAnimation);

const newEnemyIntervalId = setInterval(() => {
  // new enemy
  let newChimpanzee = new Chimpanzee(enemyId, 17, 17);
  newChimpanzee.move();
  enemyQueue.push(newChimpanzee);

  // enemy rendering
  let enemyDiv = document.createElement("div");
  enemyDiv.classList.add("enemy-container");
  enemyDiv.setAttribute("id", `enemy-${enemyId}`);
  enemyDiv.innerHTML = `<img src='./img/chimpanzee.png' class="enemy chimpanzee">`;
  enterEntrance.append(enemyDiv);

  enemyId++;
}, 2000);

// 큐의 가장 첫째부터 공격한다

export { enemyQueue, removeEnemyInEnemyQueue };
