var express = require('express');
var router = express.Router();
const db = require('../models/db');
const promocodeDB = db['promocode'];

// ADD A PROMOCODE
router.post('/', async (req, res, next) => {
    console.log(req.body);
    await promocodeDB.create(req.body);
})

// MAKE A PROMOCODE REQUEST
router.post('/request', async (req, res, next) => {
    console.log(req.body);
    let ret = {promocode_name: req.body.promocode_name};
    
    try {
        let promocode = await promocodeDB.findOne({where: {name: req.body.promocode_name}})
        const checker = require('../controllers/promocode.js')
        let retval = checker(req.body.arguments, promocode.restrictions);
        console.log('retval', retval);
        ret.status = retval ? 'accepted' : 'denied';
        if (ret.status === 'accepted') {
            ret.avantage = promocode.avantage;
        }
    } catch (error) {
        ret.status = 'denied';
        ret.reasons = error.message;
        return res.status(400).send(ret);
    }
    return res.status(200).send(ret)
    
})

module.exports = router;
