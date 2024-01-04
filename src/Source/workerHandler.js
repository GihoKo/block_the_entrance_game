import { MineralWorker, GasWorker } from "./worker.js";

const supplySourceField = document.querySelector(".supply-source");

let nowMineralWorker = 0;
let nowGasWorker = 0;
let mineralWorkerStack = [];
let gasWorkerStack = [];

const workerRoundTrip = function (newWorkerDiv, sourcePosition, commandCenterPosition, source) {
  // 1초마다 왔다갔다
  let mining = false;
  setInterval(() => {
    if (mining === false) {
      newWorkerDiv.innerHTML = `<img src='../../img/worker.png'/>`;
      newWorkerDiv.style.top = sourcePosition[0];
      newWorkerDiv.style.left = sourcePosition[1];
      mining = true;
    } else if (mining === true) {
      newWorkerDiv.innerHTML = `<img src='../../img/worker_${source}.png'/>`;
      newWorkerDiv.style.top = commandCenterPosition[0];
      newWorkerDiv.style.left = commandCenterPosition[1];
      mining = false;
    }
  }, 1000);
};

const workerHandler = function (resource, value) {
  if (resource === "mineral") {
    if (value === "increase") {
      // 미네랄 일꾼 증가
      if (nowMineralWorker >= 8) return alert("더 이상 늘릴 수 없습니다!");
      const newWorker = new MineralWorker();
      newWorker.addMineral();
      mineralWorkerStack.push(newWorker);

      const newWorkerDiv = document.createElement("div");
      newWorkerDiv.innerHTML = `<img src='../../img/worker.png'/>`;
      switch (mineralWorkerStack.length) {
        case 1:
          newWorkerDiv.style.top = "100px";
          newWorkerDiv.style.left = "140px";
          workerRoundTrip(newWorkerDiv, ["30px", "50px"], ["100px", "140px"], "mineral");
          break;
        case 2:
          newWorkerDiv.style.top = "140px";
          newWorkerDiv.style.left = "140px";
          workerRoundTrip(newWorkerDiv, ["160px", "40px"], ["140px", "140px"], "mineral");
          break;
        case 3:
          newWorkerDiv.style.top = "80px";
          newWorkerDiv.style.left = "180px";
          workerRoundTrip(newWorkerDiv, ["40px", "185px"], ["80px", "180px"], "mineral");
          break;
        case 4:
          newWorkerDiv.style.top = "154px";
          newWorkerDiv.style.left = "168px";
          workerRoundTrip(newWorkerDiv, ["180px", "168px"], ["154px", "168px"], "mineral");
          break;
        case 5:
          newWorkerDiv.style.top = "90px";
          newWorkerDiv.style.left = "232px";
          workerRoundTrip(newWorkerDiv, ["28px", "300px"], ["90px", "232px"], "mineral");
          break;
        case 6:
          newWorkerDiv.style.top = "140px";
          newWorkerDiv.style.left = "240px";
          workerRoundTrip(newWorkerDiv, ["170px", "254px"], ["140px", "240px"], "mineral");
          break;
        case 7:
          newWorkerDiv.style.top = "100px";
          newWorkerDiv.style.left = "248px";
          workerRoundTrip(newWorkerDiv, ["80px", "400px"], ["100px", "248px"], "mineral");
          break;
        case 8:
          newWorkerDiv.style.top = "128px";
          newWorkerDiv.style.left = "252px";
          workerRoundTrip(newWorkerDiv, ["192px", "360px"], ["128px", "252px"], "mineral");
          break;
      }

      newWorkerDiv.classList.add("worker");
      newWorkerDiv.classList.add("worker-mineral");
      supplySourceField.append(newWorkerDiv);
      nowMineralWorker++;
    } else {
      // 미네랄 일꾼 감소
      if (nowMineralWorker === 0) return alert("미네랄 일꾼이 존재하지 않습니다");
      let removedWorker = mineralWorkerStack[mineralWorkerStack.length - 1];
      // 자원 증가 인터벌 없애기
      removedWorker.remove();
      mineralWorkerStack.pop();
      const mineralWorkerList = document.querySelectorAll(".worker-mineral");
      mineralWorkerList[mineralWorkerList.length - 1].remove();
      nowMineralWorker--;
    }
  }

  if (resource === "gas") {
    if (value === "increase") {
      // 가스 일꾼 증가
      if (nowGasWorker >= 4) return alert("더 이상 늘릴 수 없습니다!");
      const newWorker = new GasWorker();
      newWorker.addGas();
      gasWorkerStack.push(newWorker);

      const newWorkerDiv = document.createElement("div");
      newWorkerDiv.innerHTML = `<img src='../../img/worker.png'/>`;
      switch (gasWorkerStack.length) {
        case 1:
          newWorkerDiv.style.top = "88px";
          newWorkerDiv.style.left = "140px";
          workerRoundTrip(newWorkerDiv, ["40px", "120px"], ["88px", "140px"], "gas");
          break;
        case 2:
          newWorkerDiv.style.top = "112px";
          newWorkerDiv.style.left = "128px";
          workerRoundTrip(newWorkerDiv, ["112px", "72px"], ["112px", "128px"], "gas");
          break;
        case 3:
          newWorkerDiv.style.top = "92px";
          newWorkerDiv.style.left = "232px";
          workerRoundTrip(newWorkerDiv, ["48px", "360px"], ["92px", "232px"], "gas");
          break;
        case 4:
          newWorkerDiv.style.top = "128px";
          newWorkerDiv.style.left = "256px";
          workerRoundTrip(newWorkerDiv, ["140px", "368px"], ["128px", "256px"], "gas");
          break;
      }

      newWorkerDiv.classList.add("worker");
      newWorkerDiv.classList.add("worker-gas");
      supplySourceField.append(newWorkerDiv);
      nowGasWorker++;
    } else {
      // 가스 일꾼 감소
      if (nowGasWorker === 0) return alert("가스 일꾼이 존재하지 않습니다");
      let removedWorker = gasWorkerStack[gasWorkerStack.length - 1];
      // 자원 증가 인터벌 없애기
      removedWorker.remove();
      gasWorkerStack.pop();
      const gasWorkerList = document.querySelectorAll(".worker-gas");
      gasWorkerList[gasWorkerList.length - 1].remove();
      nowGasWorker--;
    }
  }
};

export { workerHandler, nowMineralWorker, nowGasWorker, mineralWorkerStack, gasWorkerStack };
