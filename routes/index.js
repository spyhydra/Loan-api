const express = require('express');
const home_controller = require("../controller/home_Controller");
const router = express.Router();


router.get('/',home_controller.home);

router.use('/api', require('./loan'));










module.exports = router;