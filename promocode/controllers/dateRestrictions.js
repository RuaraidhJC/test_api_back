const dateFuncMap = require('./maps/date-func-map.js');

export default (num, restrictions) => {
    let ret = true;
    Object.keys(restrictions).forEach((item) => {
        ret = ret && dateFuncMap[item](num, restrictions[item])
    })
    return ret;
};