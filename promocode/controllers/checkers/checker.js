module.exports =  (data, restrictions, funcMap) => {
    let ret = true;
    Object.keys(restrictions).forEach((item) => {
        ret = ret && funcMap[item](data, restrictions[item])
        
    })
    return ret;
};