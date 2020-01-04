module.exports = {
    'before': (x, y) => {
        let dateX = new Date(x);
        let dateY = new Date(y);
        return dateX < dateY;
    },
    'after': (x, y) => {
        let dateX = new Date(x);
        let dateY = new Date(y);
        return dateX > dateY;
    }
}
