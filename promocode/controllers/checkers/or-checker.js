
const restrictionMap = require('../maps/restriction-map.js');
const checker = require('./checker.js');

const orChecker = (data, array) => {
    console.log('orChecker', data, array);
    if (!Array.isArray(array) || !array.length) {
        throw new Error('@or must be a populated array');
    }
    let ret = false;
    array.forEach(item => {
        const key = Object.keys(item)[0];
        if (key === "@and") {
            ret = ret || andChecker(data, item[key]);
        } else if (key === "@or") {
            ret = ret || orChecker(data, item[key]);
        } else {
            console.log('item', item);
            ret = ret || checker(data[key.replace("@", "")], item[key], restrictionMap[key]);
        }
    });
    console.log('returning from or', ret);
    return ret;
}

const andChecker = (data, array) => {
    console.log(Array.isArray(array));
    if (!Array.isArray(array) || !array.length) {
        console.log(array);
        throw new Error('@and must be a populated array');
    }
    let ret = true;
    for (let cpt = 0; cpt < array.length; cpt++) {
        const item = array[cpt]
        const key = Object.keys(item)[0];
        console.log('key and data', key, data);
        if (key === "@and" && !andChecker(data, item[key])) {
            return false;
        } else if (key === "@or" && !orChecker(data, item[key])) {
            return false;
        } else if (key !== '@and' && key !== '@or' && !checker(data[key.replace("@", "")], item[key], restrictionMap[key])) {
            return false;
        }
    }
    return ret;
}

module.exports = andChecker;