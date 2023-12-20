import { workerHandler } from './workerHandler.js'

const commandCenter = document.querySelector('#supply-source_command-center');
const workerShopModal = document.querySelector('.command__modal');
const mineralWorkerIncreaseBtn = document.querySelector('.command__modal--btn-increase.mineral');
const mineralWorkerDecreaseBtn = document.querySelector('.command__modal--btn-decrease.mineral');
const gasWorkerIncreaseBtn = document.querySelector('.command__modal--btn-increase.gas');
const gasWorkerDecreaseBtn = document.querySelector('.command__modal--btn-decrease.gas');


const workerShopModalHandler = function () {
    workerShopModal.classList.toggle('on');
}

commandCenter.addEventListener('click', (e) => { workerShopModalHandler() })
// workerHandler.js 이동
mineralWorkerIncreaseBtn.addEventListener('click', (e) => { workerHandler('mineral', 'increase') })
mineralWorkerDecreaseBtn.addEventListener('click', (e) => { workerHandler('mineral', 'decrease') })
gasWorkerIncreaseBtn.addEventListener('click', (e) => { workerHandler('gas', 'increase') })
gasWorkerDecreaseBtn.addEventListener('click', (e) => { workerHandler('gas', 'decrease') })