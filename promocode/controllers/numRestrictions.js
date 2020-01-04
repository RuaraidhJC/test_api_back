const numFuncMap = require('./maps/num-func-map.js');

export default (num, restrictions) => {
    let ret = true;
    Object.keys(restrictions).forEach((item) => {
        ret = ret && numFuncMap[item](num, restrictions[item])
    })
    return ret;
};