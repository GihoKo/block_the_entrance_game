import { SingleShot, DoubleShot, Wall, RangeShot, LaserShot, Slow, towers as towerlist } from "./towers.js"
import { battlegroundFeild } from "./battlegroundRender.js";
//   towerCard 영역
const towerCardContainer = document.querySelector('.towers');
let currentBtn = null;

const clickTowerCoverHandler = function (e) { 
    if (e.target.parentElement.dataset.card === currentBtn) { // 이미 선택된걸 다시 클릭하면 초기화
        e.target.parentElement.classList.remove('click');
        return currentBtn = null;
    }
    e.target.parentElement.classList.add('click'); // 선택했을 때 애니메이션
    currentBtn = e.target.parentElement.dataset.card; // currentBtn 할당
}

towerCardContainer.addEventListener('click', clickTowerCoverHandler);

// tower card를 클릭한 상태에서 battleground를 클릭하면 타워가 생긴다
const clickBattlegroundFeildHandler = function (e) {
    const div = document.createElement('div');
    div.innerHTML = `<img src="./img/${currentBtn}.png">`;
    e.target.append(div);
}

// 타워 카드를 누르고 필드를 누르면 타워가 생성되는 것 까지 구현 (231213)

battlegroundFeild.addEventListener('click', clickBattlegroundFeildHandler)




