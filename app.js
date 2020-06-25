var app=require('express')();
var express=require('express');
var config=require('config');
var path=require('path')
app.use(express.json());
var mongoose=require('mongoose');
var key=config.get('mongoURI');
mongoose.connect(key,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true 
})
.then(()=>console.log("Database Connected"))
.catch((err)=>console.log(err));

var cors=require('cors');
app.use(cors());

app.use('/register',require('./routes/Register/register'));
app.use('/events',require('./routes/Events/new-event'));
app.use('/authenticate',require('./routes/Authenticate/authenticate'));
app.use('/getevents',require('./routes/GetEvents/getevents.js'));
if(process.env.NODE_ENV==='production')
{
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

app.listen(process.env.PORT||5000);