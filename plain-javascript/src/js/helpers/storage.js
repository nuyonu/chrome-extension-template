const storage = chrome.storage.local;

function set(key, value) {
    storage.set({[key]: value});
}

function remove(key) {
    return new Promise(function(resolve) {
        storage.remove([key], () =>  resolve())
    });
}

function get(key, callBack) {
    storage.get(key, callBack);
}

function getValue(key) {
    return new Promise(function(resolve) {
        storage.get([key], function(result) {
            resolve(result[key]);
         })
    });
}

const KEYS = {
    STATUS: 'status'
};

export { set, get, getValue, remove, KEYS };