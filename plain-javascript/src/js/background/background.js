import * as storage from '../helpers/storage.js';

chrome.runtime.onInstalled.addListener(function () {
    storage.set(storage.KEYS.STATUS, false);
});