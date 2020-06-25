var jwt=require('jsonwebtoken');
var config=require('config');

function auth(req,res,next){
    const token=req.headers.authorization;
    if(!token)
    res.status(401).json({msg:'No token,Authentication denied'});
    try{
var decoded=jwt.verify(token,config.get('jwtkey'));

req.user=decoded;
next();
    }
    catch(e){
res.status(400).json({msg:'Wrong credentials'});
    }
}

module.exports=auth;