import { updateMineralReserves, updateGasReserves } from "./resource_reserves.js";

class MineralWorker {
  constructor() {
    this.id = null;
    this.moveId = null;
    this.addMineralValue = 10;
    this.img = "../../img/worker.png";
    this.returningImg = "../../img/worker_mineral.png";
    // top, left 좌표
  }
  addMineral() {
    this.id = setInterval(() => {
      updateMineralReserves(this.addMineralValue);
    }, 2000);
  }
  remove() {
    clearInterval(this.id);
  }
}

class GasWorker {
  constructor() {
    this.id = null;
    this.addGasValue = 10;
    this.img = "../../img/worker.png";
    this.returningImg = "../../img/worker_gas.png";
  }
  addGas() {
    this.id = setInterval(() => {
      updateGasReserves(this.addGasValue);
    }, 2000);
  }
  remove() {
    clearInterval(this.id);
  }
}

export { MineralWorker, GasWorker };
