//import Event model
var Event=require('../../models/event.model');

//Get All the Events 

module.exports=function (req,res)
{
    Event.find({})
    .then(response=>{
        return res.json({response})
    })
    .catch(err=>console.log(err));
};
