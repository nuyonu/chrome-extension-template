import * as storage from '../helpers/storage.js';

export async function main() {
    console.log('Yes');

    const currentStatus = await storage.getValue(storage.KEYS.STATUS);

    if (currentStatus) {
        changeBackgroundColor();
    }
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
}