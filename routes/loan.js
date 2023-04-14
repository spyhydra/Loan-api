const express = require('express');
const home_controller = require("../controller/home_Controller");
const router = express.Router();
const loan_controller=require('../controller/loan_Controller')

router.get('/loan',loan_controller.loan);






module.exports=router;