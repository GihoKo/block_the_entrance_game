import { Chimpanzee } from './enemyData.js'
import { battlegroundFeild } from './fieldData.js'
import { enterEntrance, exitEntrance } from './battlegroundRender.js';
// 적 생성 함수
let enemyQueue = [];
let gameTimeStamp = document.querySelector('.status-bar__time-stamp')
let enemyId = 0;

const performAnimation = (timeStamp) => {
    let nowTime = timeStamp / 1000

    // status bar time stamp
    gameTimeStamp.textContent = `TIME : ${Math.floor(timeStamp / 1000)}초`;
    // 실시간 enemy 렌더링
    enemyQueue.forEach((enemy,i)=>{
        const nowEnemy = document.querySelector(`#enemy-${i}`);
        nowEnemy.style.left = `${enemy.positionX}px`;
        nowEnemy.style.top = `${enemy.positionY}px`;
        // 만약 exitEntrance에 닿으면 remove()
        if(document.querySelector(`#enemy-${i}`).getBoundingClientRect().right > 895) {
            document.querySelector('.defeat').style.display = 'flex';
            return defeat();
        }


    })





    requestAnimationFrame(performAnimation);
}
requestAnimationFrame(performAnimation);

setInterval(() => {
    // new enemy
    let newChimpanzee = new Chimpanzee(enemyId, 17, 17);
    newChimpanzee.move();
    enemyQueue.push(newChimpanzee);


    // enemy rendering
    let enemyDiv = document.createElement('div')
    enemyDiv.classList.add('enemy-container');
    enemyDiv.setAttribute('id', `enemy-${enemyId}`);
    enemyDiv.innerHTML = `<img src='./img/chimpanzee.png' class="enemy chimpanzee">`
    enterEntrance.append(enemyDiv);

    enemyId++;
}, 2000)



// 큐의 가장 첫째부터 공격한다
















