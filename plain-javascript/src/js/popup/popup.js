import * as storage from '../helpers/storage.js';

const buttonEl = document.getElementById('change-status-btn');
const statusDisplayEl = document.getElementById('status');

(async () => {
    await init();
})()

async function init() {
    await displayCurrentStatus();

    buttonEl.addEventListener('click', async () => {
        await changeStatus();
        await displayCurrentStatus();
    });
};

async function displayCurrentStatus() {
    const currentStatus = await getCurrentStatus();
    statusDisplayEl.innerText = currentStatus == true ? 'Active' : 'Inactive';
}

async function changeStatus() {
    const currentStatus = await getCurrentStatus();
    const newStatus = !currentStatus;

    storage.set(storage.KEYS.STATUS, newStatus);
};

async function getCurrentStatus() {
    return storage.getValue(storage.KEYS.STATUS);
};