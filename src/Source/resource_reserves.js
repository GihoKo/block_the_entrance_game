const mineralReserves = document.querySelector(".mineral-reserves");
const gasReserves = document.querySelector(".gas-reserves");

let currentMineralReserves = 150;
let currentGasReserves = 0;

// worker.js의 일꾼을 생성할 때 자원 수급 증가 메서드
const updateMineralReserves = function (addMineralValue) {
  currentMineralReserves += addMineralValue;
};

const updateGasReserves = function (addGasValue) {
  currentGasReserves += addGasValue;
};

// 실시간으로 자원 반영
setInterval(() => {
  mineralReserves.textContent = `${currentMineralReserves}`;
  gasReserves.textContent = `${currentGasReserves}`;
}, 0);

export { currentMineralReserves, currentGasReserves, updateMineralReserves, updateGasReserves };
