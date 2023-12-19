import { MineralWorker, GasWorker } from './worker.js'

let nowMineralWorker = 0;
let nowGasWorker = 0;
let mineralWorkerStack = [];
let gasWorkerStack = [];

const workerHandler = function (resource, value) {
    if (resource === 'mineral') {
        if (value === 'increase') { // 미네랄 일꾼 증가
            if (nowMineralWorker >= 8) return alert('더 이상 늘릴 수 없습니다!')
            const newWorker = new MineralWorker();
            newWorker.addMineral();
            mineralWorkerStack.push(newWorker);
            nowMineralWorker++;
        } else { // 미네랄 일꾼 감소
            if (nowMineralWorker === 0) return alert('미네랄 일꾼이 존재하지 않습니다')
            let removedWorker = mineralWorkerStack[mineralWorkerStack.length - 1];
            removedWorker.remove();
            mineralWorkerStack.pop()
            nowMineralWorker--;
        }
    }
    if (resource === 'gas') {
        if (value === 'increase') { // 가스 일꾼 증가
            if (nowGasWorker >= 4) return alert('더 이상 늘릴 수 없습니다!')
            const newWorker = new GasWorker();
            newWorker.addGas();
            gasWorkerStack.push(newWorker);
            nowGasWorker++;
        } else { // 가스 일꾼 감소
            if (nowGasWorker === 0) return alert('가스 일꾼이 존재하지 않습니다')
            let removedWorker = gasWorkerStack[gasWorkerStack.length - 1];
            removedWorker.remove();
            gasWorkerStack.pop()
            nowGasWorker--;
        }
    }
}

export { workerHandler, nowMineralWorker, nowGasWorker, mineralWorkerStack, gasWorkerStack };