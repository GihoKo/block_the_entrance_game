// supply-source 부분
const supplySource = document.querySelector('.supply-source');
const mineralWorkmanAdd = document.querySelector('#workman-mineral-add');
const mineralWorkmanRemove = document.querySelector('#workman-mineral-remove');
const gasWorkmanAdd = document.querySelector('#workman-gas-add');
const gasWorkmanRemove = document.querySelector('#workman-gas-remove');

let mineralPrev = document.querySelector('#total_mineral');
let gasPrev = document.querySelector('#total_gas');
let mineralWorkman = 0;
let gasWorkman = 0;
let totalMineral = 0;
let totalGas = 0;
let mineralWorkers = [];
let gasWorkers = [];

class MineralWorker {
    constructor(value) {
        this.value = value;
        this.work = false;
        this.workingImg = './img/mineral_workman.png'
        this.receivingImg = './img/mineral_workman_mining.png'
        this.position = { top: '120px', left: '168px' };
        this.addMineralId;
    }
    working() {
        switch (this.value) {
            case 0:
                this.work = true;
                this.position = { top: '32px', left: '104px' };
                break;
            case 1:
                this.work = true;
                this.position = { top: '60px', left: '72px' };
                break;
            case 2:
                this.work = true;
                this.position = { top: '100px', left: '72px' };
                break;
            case 3:
                this.work = true;
                this.position = { top: '136px', left: '72px' };
                break;
            case 4:
                this.work = true;
                this.position = { top: '172px', left: '72px' };
                break;
            case 5:
                this.work = true;
                this.position = { top: '208px', left: '104px' };
                break;
        }
    }
    receiving() {
        this.work = false;
        this.position = { top: '120px', left: '168px' };
    }
    addMineral() {
        this.addMineralId = setInterval(() => {
            totalMineral += 4;
        }, 2000)
    }
    removeAddMineral() {
        clearInterval(this.addMineralId);
    }
}

class GasWorker {
    constructor(value) {
        this.value = value;
        this.work = false;
        this.workingImg = './img/gas_workman.png';
        this.receivingImg = './img/gas_workman_mining.png';
        this.position = { top: '120px', right: '168px' };
        this.addGasId;
    }
    working() {
        switch (this.value) {
            case 0:
                this.work = true;
                this.position = { top: '48px', right: '104px' };
                break;
            case 1:
                this.work = true;
                this.position = { top: '128px', right: '80px' };
                break;
            case 2:
                this.work = true;
                this.position = { top: '208px', right: '104px' };
                break;
        }
    }
    receiving() {
        this.work = false;
        this.position = { top: '120px', right: '168px' };
    }
    addGas() {
        this.addGasId = setInterval(() => {
            totalGas += 2;
        }, 2000)
    }
    removeAddGas() {
        clearInterval(this.addGasId);
    }
}


// 미네랄 일꾼 버튼
mineralWorkmanAdd.addEventListener('click', () => {
    console.log(mineralWorkman);
    if (mineralWorkman > 5) {
        return alert('더 이상 늘릴 수 없습니다!')
    }
    let newWorker = new MineralWorker(mineralWorkman);
    let workerElement = document.createElement('img');
    workerElement.classList.add('worker');
    workerElement.classList.add('mineralWorker');
    workerElement.setAttribute('src', newWorker.workingImg);
    workerElement.style.position = 'absolute';
    workerElement.style.top = '120px';
    workerElement.style.left = '168px';
    supplySource.append(workerElement);

    newWorker.addMineral();

    setInterval(() => {
        if (newWorker.work === false) {
            newWorker.working();
            workerElement.style.top = newWorker.position.top;
            workerElement.style.left = newWorker.position.left;
            workerElement.setAttribute('src', newWorker.workingImg);
        } else {
            newWorker.receiving();
            workerElement.style.top = newWorker.position.top;
            workerElement.style.left = newWorker.position.left;
            workerElement.setAttribute('src', newWorker.receivingImg);
        }
    }, 1000)
    mineralWorkers.push(newWorker);
    mineralWorkman++;
})

mineralWorkmanRemove.addEventListener('click', () => {
    if (mineralWorkman < 0) {
        return alert('더 이상 줄일 수 없습니다!');
    }
    // html에서 지우기
    const mineralWorkmans = document.querySelectorAll('.mineralWorker');
    mineralWorkmans[mineralWorkmans.length - 1].remove();
    // class 지우기
    mineralWorkers[mineralWorkers.length - 1].removeAddMineral();
    delete mineralWorkers[mineralWorkers.length - 1];
    mineralWorkers.pop();
    mineralWorkman--;
})


// 가스 일꾼 버튼
gasWorkmanAdd.addEventListener('click', () => {
    if (gasWorkman > 2) {
        return alert('더 이상 늘릴 수 없습니다!')
    }
    let newWorker = new GasWorker(gasWorkman);
    let workerElement = document.createElement('img');
    workerElement.classList.add('worker');
    workerElement.classList.add('gasWorker');
    workerElement.setAttribute('src', newWorker.workingImg);
    workerElement.style.position = 'absolute';
    workerElement.style.top = '120px';
    workerElement.style.right = '168px';
    supplySource.append(workerElement);

    newWorker.addGas();

    setInterval(() => {
        if (newWorker.work === false) {
            newWorker.working();
            workerElement.style.top = newWorker.position.top;
            workerElement.style.right = newWorker.position.right;
            workerElement.setAttribute('src', newWorker.workingImg);
        } else {
            newWorker.receiving();
            workerElement.style.top = newWorker.position.top;
            workerElement.style.right = newWorker.position.right;
            workerElement.setAttribute('src', newWorker.receivingImg);
        }
    }, 1000)
    gasWorkers.push(newWorker);
    gasWorkman++;
})

gasWorkmanRemove.addEventListener('click', () => {
    if (gasWorkman < 0) {
        return alert('더 이상 줄일 수 없습니다!');
    }
    // html에서 지우기
    const gasWorkmans = document.querySelectorAll('.gasWorker');
    gasWorkmans[gasWorkmans.length - 1].remove();
    // class 지우기
    gasWorkers[gasWorkers.length - 1].removeAddGas();
    delete gasWorkers[gasWorkers.length - 1];
    gasWorkers.pop();
    gasWorkman--;
})

setInterval(() => {
    mineralPrev.textContent = `${totalMineral}`;
    gasPrev.textContent = `${totalGas}`;
}, 0)