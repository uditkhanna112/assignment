var Event =require('../../models/event.model');



//export newEvent controller
module.exports=function(req,res){
    const {eventname,eventtype,eventorganizer}=req.body;
    
const eventdate=Date.parse(req.body).eventdate;
    const newEvent=new Event({
        eventname,eventtype,eventorganizer,eventdate
    });

    //save event
    newEvent.save()
            .then(user=>{
return res.json(user);

}).catch(err=>console.log(err));

}
