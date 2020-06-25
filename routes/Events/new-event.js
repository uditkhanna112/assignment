var express=require('express');

var Router =express.Router();

var newEvent=require('../../controllers/Events/newevent');

//route to add new event
Router.post('/newevent',newEvent);

module.exports=Router;