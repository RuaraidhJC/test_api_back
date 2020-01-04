module.exports = {
    'before': (x, y) => {
        let dateX = new Date(x);
        let dateY = new Date(y);
        console.log('dates before', dateX, dateY, dateX < dateY);
        return dateX < dateY;
    },
    'after': (x, y) => {
        let dateX = new Date(x);
        let dateY = new Date(y);
        console.log('dates after', dateX, dateY, dateX > dateY);
        return dateX > dateY;
    }
}
