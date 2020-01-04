module.exports =  (data, restrictions, funcMap) => {
    let ret = true;
    Object.keys(restrictions).forEach((item) => {
        console.log(data, item, restrictions, ret);
        ret = ret && funcMap[item](data, restrictions[item])
        
    })
    console.log('return', ret);
    return ret;
};