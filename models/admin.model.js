var mongoose=require('mongoose');
var schema=mongoose.Schema;



//creating user schema to see events
var adminData =new schema({
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
const adminSchema=mongoose.model('admin',adminData);

module.exports=adminSchema;