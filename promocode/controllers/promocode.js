const checker = require('./checkers/or-checker.js');

const promocodeChecker = (data, restrictions) => {
    return checker(data, restrictions["@and"]);
}

module.exports = promocodeChecker;