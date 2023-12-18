const commandCenter = document.querySelector('#supply-source_command-center');
const workerShopModal = document.querySelector('.command__modal');

const workerShopModalHandler = function () {
    workerShopModal.classList.toggle('on');
}

commandCenter.addEventListener('click', (e)=>{workerShopModalHandler()})