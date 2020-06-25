var router=require('express').Router();
var EventList=require('../../controllers/GetEvents/geteventss');

router.get('/',EventList);

module.exports=router;