import { entrances, roads, battlegroundFeild } from "./fieldData.js";

// battleground 렌더링
class Cell {
  constructor(x, y) {
    this.position = `(${x},${y})`;
    this.tower = null;
  }
}
// 2차원 배열로 battleground를 만든다. 이때 undefined로 시작
let battlegroundArray = new Array(7).fill(undefined).map((a, i) => {
  return new Array(12).fill(undefined);
});

(function battlegroundRender() {
  for (let i = 0; i < 7; i++) {
    // 가로 for문 돌리기 (i)
    for (let j = 0; j < 12; j++) {
      // cell for문 돌리기 (j)
      // (i,j)에 new Cell로 좌표를 i,j로 넣고, tower는 null로
      let cell = new Cell(i + 1, j + 1);
      battlegroundArray[i][j] = cell;

      // div를 생성해서 battleground의 자식으로 부착
      let div = document.createElement("div");
      div.classList.add("battleground__cell");
      div.dataset.position = `${cell.position}`;
      entrances.forEach((entrance, i) => {
        // entrance
        if (div.dataset.position === entrance) {
          div.classList.add("entrance");
        }
      });
      roads.forEach((road, i) => {
        // road
        if (div.dataset.position === road) {
          div.classList.add("road");
        }
      });
      battlegroundFeild.append(div);
    }
  }
})();
// 적 입구와 탈출구
let enterEntrance = document.querySelector('.battleground__cell[data-position="(4,1)"]');
let exitEntrance = document.querySelector('.battleground__cell[data-position="(4,12)"]');
const battlegroundCells = document.querySelectorAll(".battleground__cell");

// battleground 클릭시 좌표나타내기
const ground = document.querySelector(".battleground");
console.log(ground);
ground.addEventListener("click", (e) => {
  console.log(e.clientX, e.clientY);
});

export { battlegroundFeild, enterEntrance, exitEntrance, battlegroundCells };
