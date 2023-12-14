// battleground 영역
class Cell {
    constructor(x, y, tower) {
        this.x = x;
        this.y = y;
        this.tower = tower;
    }
    buildTower(tower) {
        this.tower = tower;
    }
    removeTower() {
        console.log('remove');
    }
}
let battlegroundFeild = document.querySelector('.battleground');
// 2차원 배열로 battleground를 만든다. 이때 undefined로 시작
let battlegroundArray = new Array(7).fill(undefined).map((a, i) => { return new Array(12).fill(undefined) });

battlegroundArray[0][0] = new Cell(1, 1, null)
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

console.log(battlegroundArray);

const clickBattlegroundFeildHandler = function (e) {
    let positionX = e.target.dataset.positionx;
    let positionY = e.target.dataset.positiony;
    let currentCell = battlegroundArray[positionX - 1][positionY - 1];
    currentCell.buildTower(currentBtn);
    console.log(currentCell);
    console.log(e.target)
}

// 타워 카드를 누르고 필드를 누르면 타워가 생성되는 것 까지 구현 (231213)

battlegroundFeild.addEventListener('click', clickBattlegroundFeildHandler)



//   towerCard 영역
const towerCover = document.querySelector('.towers');
const towerCards = document.querySelectorAll('.tower');
const dataTowers = document.querySelectorAll('div[data-tower]')
let currentBtn = null;
const towers = ['singleshot', 'doubleshot', 'wall', 'rangeshot', 'lasershot', 'slow'];

class Wall {
    constructor(cell) {
        this.cell = cell;
        this.type = 'wall';
        this.img = './img/wall.png'
    }
    remove() {
        console.log('delete');
    }
}

class SingleShot {
    constructor(cell) {
        this.cell = cell;
        this.type = 'singleshot';
        this.img = './img/singleshot.png'
    }
    remove() {
        console.log('delete');
    }
}

class DoubleShot {
    constructor(cell) {
        this.cell = cell;
        this.type = 'doubleshot';
        this.img = './img/doubleshot.png'
    }
    remove() {
        console.log('delete');
    }
}

class RangeShot {
    constructor(cell) {
        this.cell = cell;
        this.type = 'rangeshot';
        this.img = './img/rangeshot.png'
    }
    remove() {
        console.log('delete');
    }
}

class LaserShot {
    constructor(cell) {
        this.cell = cell;
        this.type = 'lasershot';
        this.img = './img/lasershot.png'
    }
    remove() {
        console.log('delete');
    }
}

class Slow {
    constructor(cell) {
        this.cell = cell;
        this.type = 'slow';
        this.img = './img/slow.png'
    }
    remove() {
        console.log('delete');
    }
}



const clickTowerCoverHandler = function (e) {
    towers.forEach((tower, i) => {
        if (e.target.dataset.tower === tower) { // 클릭한 타워를 dataset으로 찾아낸다
            towerCards.forEach((towerCard, i) => {
                towerCard.classList.remove('click'); // 카드가 click된걸 초기화 먼저
            })
            e.target.parentElement.classList.add('click'); // click 클래스 부여
            currentBtn = e.target.dataset.tower; // 현재 클릭한 버튼 할당
            console.log(currentBtn);
        }
    })
}

towerCover.addEventListener('click', clickTowerCoverHandler);
