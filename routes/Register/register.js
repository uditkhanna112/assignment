var express=require('express');
var app=express();
var router =express.Router();
var userReg=require('../../controllers/Register/Registeruser');
var adminReg=require('../../controllers/Register/registeradmin');

//user registration route
router.post('/userregister',userReg);

//admin registration route
router.post('/adminregister',adminReg);

module.exports=router;