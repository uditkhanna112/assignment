var app=require('express')()
var express=require('express');
var router =express.Router();
var authUser=require('../../controllers/Authentication/authenticateuser');

var authAdmin=require('../../controllers/Authentication/authenticateadmin');


//Authenticate Student
router.post('/user',authUser);

//Authenticate Admin
router.post('/admin',authAdmin);


module.exports=router;

