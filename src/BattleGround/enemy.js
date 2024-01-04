import { Chimpanzee, Gorilla, Orangutan } from "./enemyData.js";
import { enterEntrance } from "./battlegroundRender.js";

// 적 생성 함수
let enemyQueue = [];
let gameTimeStamp = document.querySelector(".status-bar__time-stamp");
let enemyId = 0;
let lastSpawnTimeStamp = 0;
// 적이 만들어지는 시간 1초
let spawnEnemyTime = 2000;

const renewalTimer = (currentTimeStamp) => {
  // status bar time stamp
  gameTimeStamp.textContent = `TIME : ${Math.floor(currentTimeStamp / 1000)}초`;
};

// enemy의 hp가 0이 될 때 enemyQueue에서 사라지는 함수
const removeEnemyInEnemyQueue = (currentEnemyId) => {
  enemyQueue = enemyQueue.filter((enemy) => enemy.enemyId !== currentEnemyId);
};

// enemy의 position을 이용해서 실시간으로 움직임을 주는 함수
const enemyMove = () => {
  // 실시간 enemy 렌더링
  enemyQueue.forEach((enemy, i) => {
    // 순회중인 현재 적의 DOM을 가져오고
    let nowEnemy = document.querySelector(`#enemy-${enemy.enemyId}`);
    // 해당 DOM의 위치를 실시간으로 업데이트
    nowEnemy.style.left = `${enemy.positionX}px`;
    nowEnemy.style.top = `${enemy.positionY}px`;
    // 만약 exit entrance에 도착하면 게임 패배
    if (document.querySelector(`#enemy-${enemy.enemyId}`).getBoundingClientRect().right > 895) {
      document.querySelector(".defeat").style.display = "flex";
      return defeat();
    }
  });
};

const createEnemy = (enemyValue) => {
  // 새로운 적 인스턴스 생성
  let newEnemy;
  switch (enemyValue) {
    case "chimpanzee":
      newEnemy = new Chimpanzee(enemyId, 17, 17);
      break;
    case "orangutan":
      newEnemy = new Orangutan(enemyId, 17, 17);
      break;
    case "gorilla":
      newEnemy = new Gorilla(enemyId, 17, 17);
      break;
  }
  newEnemy.move();
  enemyQueue.push(newEnemy);
  // enemy rendering
  let enemyDiv = document.createElement("div");
  enemyDiv.classList.add("enemy-container");
  enemyDiv.setAttribute("id", `enemy-${enemyId}`);
  enemyDiv.innerHTML = `<img src='./img/${enemyValue}.png' class="enemy ${enemyValue}">`;
  enterEntrance.append(enemyDiv);
  enemyId++;
};

const renewalLastSpawnTimeStamp = (currentTimeStamp) => {
  return (lastSpawnTimeStamp = currentTimeStamp);
};

const performAnimation = (currentTimeStamp) => {
  // 실시간으로 적을 만들어낸다
  // 일단 시간 조건에 따라서 나오는 적을 다르게 할 것임
  if (currentTimeStamp - lastSpawnTimeStamp >= spawnEnemyTime) {
    if (currentTimeStamp < 5000) {
      createEnemy("chimpanzee");
    } else if (currentTimeStamp < 10000) {
      createEnemy("orangutan");
    } else if (true) {
      createEnemy("gorilla");
    }
    renewalLastSpawnTimeStamp(currentTimeStamp);
  }
  // 타이머 갱신 함수
  renewalTimer(currentTimeStamp);
  // 실시간 적 move 함수
  enemyMove();
  // 재귀적으로 애니메이션 함수 실핼
  requestAnimationFrame(performAnimation);
};
requestAnimationFrame(performAnimation);

export { enemyQueue, removeEnemyInEnemyQueue };
