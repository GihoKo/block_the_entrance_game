import { MineralWorker, GasWorker } from './worker.js'

const supplySourceField = document.querySelector('.supply-source');

let nowMineralWorker = 0;
let nowGasWorker = 0;
let mineralWorkerStack = [];
let gasWorkerStack = [];

const workerRoundTrip = function (newDiv, sourcePosition, commandCenterPosition, source) {
    // 1초마다 왔다갔다
    let mining = false;
    setInterval(() => {
        if (mining === false) {
            newDiv.innerHTML = `<img src='../../img/worker.png'/>`
            newDiv.style.top = sourcePosition[0];
            newDiv.style.left = sourcePosition[1];
            mining = true;
        } else if (mining === true) {
            newDiv.innerHTML = `<img src='../../img/worker_${source}.png'/>`
            newDiv.style.top = commandCenterPosition[0];
            newDiv.style.left = commandCenterPosition[1];
            mining = false;
        }
    }, 1000)
}

const workerHandler = function (resource, value) {
    if (resource === 'mineral') {
        if (value === 'increase') { // 미네랄 일꾼 증가
            if (nowMineralWorker >= 8) return alert('더 이상 늘릴 수 없습니다!')
            const newWorker = new MineralWorker();
            newWorker.addMineral();
            mineralWorkerStack.push(newWorker);

            const newDiv = document.createElement('div');
            newDiv.innerHTML = `<img src='../../img/worker.png'/>`
            switch (mineralWorkerStack.length) {
                case 1:
                    newDiv.style.top = '100px';
                    newDiv.style.left = '140px';
                    workerRoundTrip(newDiv, ['30px', '50px'], ['100px', '140px'], 'mineral')
                    break
                case 2:
                    newDiv.style.top = '140px';
                    newDiv.style.left = '140px';
                    workerRoundTrip(newDiv, ['160px', '40px'], ['140px', '140px'], 'mineral')
                    break
                case 3:
                    newDiv.style.top = '80px';
                    newDiv.style.left = '180px';
                    workerRoundTrip(newDiv, ['40px', '185px'], ['80px', '180px'], 'mineral')
                    break
                case 4:
                    newDiv.style.top = '154px';
                    newDiv.style.left = '168px';
                    workerRoundTrip(newDiv, ['180px', '168px'], ['154px', '168px'], 'mineral')
                    break
                case 5:
                    newDiv.style.top = '90px';
                    newDiv.style.left = '232px';
                    workerRoundTrip(newDiv, ['28px', '300px'], ['90px', '232px'], 'mineral')
                    break
                case 6:
                    newDiv.style.top = '140px';
                    newDiv.style.left = '240px';
                    workerRoundTrip(newDiv, ['170px', '254px'], ['140px', '240px'], 'mineral')
                    break
                case 7:
                    newDiv.style.top = '100px';
                    newDiv.style.left = '248px';
                    workerRoundTrip(newDiv, ['80px', '400px'], ['100px', '248px'], 'mineral')
                    break
                case 8:
                    newDiv.style.top = '128px';
                    newDiv.style.left = '252px';
                    workerRoundTrip(newDiv, ['192px', '360px'], ['128px', '252px'], 'mineral')
                    break
            }

            newDiv.classList.add('worker');
            newDiv.classList.add('worker-mineral');
            supplySourceField.append(newDiv);
            nowMineralWorker++;
        } else { // 미네랄 일꾼 감소
            if (nowMineralWorker === 0) return alert('미네랄 일꾼이 존재하지 않습니다')
            let removedWorker = mineralWorkerStack[mineralWorkerStack.length - 1];
            // 자원 증가 인터벌 없애기
            removedWorker.remove();
            mineralWorkerStack.pop()
            const mineralWorkerList = document.querySelectorAll('.worker-mineral');
            mineralWorkerList[mineralWorkerList.length - 1].remove();
            nowMineralWorker--;
        }
    }


    if (resource === 'gas') {
        if (value === 'increase') { // 가스 일꾼 증가
            if (nowGasWorker >= 4) return alert('더 이상 늘릴 수 없습니다!')
            const newWorker = new GasWorker();
            newWorker.addGas();
            gasWorkerStack.push(newWorker);

            const newDiv = document.createElement('div');
            newDiv.innerHTML = `<img src='../../img/worker.png'/>`
            switch (gasWorkerStack.length) {
                case 1:
                    newDiv.style.top = '88px';
                    newDiv.style.left = '140px';
                    workerRoundTrip(newDiv, ['40px', '120px'], ['88px', '140px'], 'gas')
                    break
                case 2:
                    newDiv.style.top = '112px';
                    newDiv.style.left = '128px';
                    workerRoundTrip(newDiv, ['112px', '72px'], ['112px', '128px'], 'gas')
                    break
                case 3:
                    newDiv.style.top = '92px';
                    newDiv.style.left = '232px';
                    workerRoundTrip(newDiv, ['48px', '360px'], ['92px', '232px'], 'gas')
                    break
                case 4:
                    newDiv.style.top = '128px';
                    newDiv.style.left = '256px';
                    workerRoundTrip(newDiv, ['140px', '368px'], ['128px', '256px'], 'gas')
                    break
            }

            newDiv.classList.add('worker');
            newDiv.classList.add('worker-gas');
            supplySourceField.append(newDiv);
            nowGasWorker++;
        } else { // 가스 일꾼 감소
            if (nowGasWorker === 0) return alert('가스 일꾼이 존재하지 않습니다')
            let removedWorker = gasWorkerStack[gasWorkerStack.length - 1];
            // 자원 증가 인터벌 없애기
            removedWorker.remove();
            gasWorkerStack.pop()
            const gasWorkerList = document.querySelectorAll('.worker-gas');
            gasWorkerList[gasWorkerList.length - 1].remove();
            nowGasWorker--;
        }
    }
}

export { workerHandler, nowMineralWorker, nowGasWorker, mineralWorkerStack, gasWorkerStack };




