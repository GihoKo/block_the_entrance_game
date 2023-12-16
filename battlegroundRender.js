// battleground 렌더링
class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
let battlegroundFeild = document.querySelector('.battleground');
// 2차원 배열로 battleground를 만든다. 이때 undefined로 시작
let battlegroundArray = new Array(7).fill(undefined).map((a, i) => { return new Array(12).fill(undefined) });

(function battlegroundRender() {
    for (let i = 0; i < 7; i++) {// 가로 for문 돌리기 (i)
        for (let j = 0; j < 12; j++) {// cell for문 돌리기 (j)
            // (i,j)에 new Cell로 좌표를 i,j로 넣고, tower는 null로
            let cell = new Cell(i + 1, j + 1, null);
            battlegroundArray[i][j] = cell;

            // div를 생성해서 battleground의 자식으로 부착
            let div = document.createElement('div');
            div.classList.add('battleground__cell');
            div.dataset.positionx = cell.x;
            div.dataset.positiony = cell.y;
            battlegroundFeild.append(div);
        }
    }
})();

export {battlegroundFeild};