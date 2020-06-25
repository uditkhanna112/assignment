var mongoose=require('mongoose');
var schema=mongoose.Schema;



//creating user schema to see events
var userData =new schema({
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        trim:true
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true
}});

//exporting schema
const userSchema=mongoose.model('user',userData);

module.exports=userSchema;