import { updateMineralReserves, updateGasReserves } from './resource_reserves.js';

class MineralWorker {
    constructor() {
        this.id = null;
        this.addMineralValue = 10;
    }
    addMineral() {
        this.id = setInterval(() => {
            updateMineralReserves(this.addMineralValue);
        }, 1000)
    }
    remove() {
        clearInterval(this.id);
    }
}

class GasWorker {
    constructor() {
        this.id = null;
        this.addGasValue = 10;
    }
    addGas() {
        this.id = setInterval(() => {
            updateGasReserves(this.addGasValue);
        }, 1000)
    }
    remove() {
        clearInterval(this.id);
    }
}

export { MineralWorker, GasWorker };