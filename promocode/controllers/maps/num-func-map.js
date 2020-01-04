module.exports = {
    "gt": (x, y) => parseInt(x) > parseInt(y),
    "lt": (x, y) => {console.log(x, y); return parseInt(x) < parseInt(y)}, 
    "eq": (x, y) => {console.log(x, y); return parseInt(x) === parseInt(y)}
}
