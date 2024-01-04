import { SingleShot, DoubleShot, Wall, RangeShot, LaserShot, Slow, towers as towerlist } from "./towers.js";
import { battlegroundFeild } from "../BattleGround/battlegroundRender.js";
import { entrances, roads } from "../BattleGround/fieldData.js";
//   towerCard 영역
const towerCardContainer = document.querySelector(".towers");
const towerCards = document.querySelectorAll(".tower");
let currentBtn = null;
let slowTowerLimit = false;

const clickTowerCoverHandler = function (e) {
  if (e.target.parentElement.dataset.card === currentBtn) {
    // 이미 선택된걸 다시 클릭하면 초기화
    e.target.parentElement.classList.remove("click");
    return (currentBtn = null);
  }
  towerCards.forEach((towerCard, i) => {
    // click들 초기화
    towerCard.classList.remove("click");
  });
  e.target.parentElement.classList.add("click"); // 선택했을 때 애니메이션
  currentBtn = e.target.parentElement.dataset.card; // currentBtn 할당
};

towerCardContainer.addEventListener("click", clickTowerCoverHandler);

const createTowerInstance = (e, currentBtn) => {
  if (currentBtn === "singleshot") {
    const singleshot = new SingleShot();
    singleshot.attack(e.target);
  }
  if (currentBtn === "rangeshot") {
    const rangeshot = new RangeShot();
    rangeshot.attack(e.target);
  }
};

// tower card를 클릭한 상태에서 battleground를 클릭하면 타워가 생긴다
const buildTowerInBattlegound = function (e) {
  // 포탑을 짓는 곳이 길이면 불가
  const cantBuildRoads = entrances.concat(roads);
  for (let road of cantBuildRoads) {
    // 지을 수 없는 길인 경우 불가
    if (e.target.dataset.position === road) return;
  }
  if (!currentBtn || currentBtn === "wall") return;
  // 선택된 포탑이 없으면 불가
  if (currentBtn === "slow" && slowTowerLimit === false) {
    // 슬로우 타워는 한번에 하나씩 지을 수 있다.
    slowTowerLimit = true;
  } else if (slowTowerLimit === true) {
    return alert("slow tower는 한번만 지을 수 있습니다!");
  }
  // 포탑 이미지 추가 + class에 포탑 이름 부착
  const div = document.createElement("div");
  div.innerHTML = `<img src="./img/${currentBtn}.png">`;
  e.target.append(div);
  createTowerInstance(e, currentBtn);
};

// 타워 카드를 누르고 필드를 누르면 타워가 생성되는 것 까지 구현 (231213)
battlegroundFeild.addEventListener("click", buildTowerInBattlegound);
