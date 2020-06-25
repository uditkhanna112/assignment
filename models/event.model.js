var mongoose=require('mongoose');
var schema=mongoose.Schema;



//creating user schema to see events
var eventData =new schema({
    eventname:{
        type:String,
        required:true,
        trim:true
    },
    eventtype:{
        type:String,
        required:true,
        trim:true
    },
    eventorganizer:{
        type:String,
        required:true,
        trim:true,
        
    },
    eventdate:{
        type:Date,
        required:true,
        trim:true
}});

//exporting schema
const eventSchema=mongoose.model('event',eventData);

module.exports=eventSchema;