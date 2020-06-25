const express=require('express');
var User=require('../../models/user-register');
var bcrypt=require('bcryptjs');
var jwt=require('jsonwebtoken');
var config=require('config');

module.exports=function(req,res){
    const {username,password}=req.body;
    User.findOne({username})
.then(user=>{
    if(!user)
    return res.status(400).json({msg:'User does not exists'});
bcrypt.compare(password,user.password).then(isMatch=>{
    if(!isMatch)
    return res.status(401).json({msg:'Invalid Credentials'});
    const data11=jwt.sign(
        {id:user.id,
            firstname:user.firstname,
            lastname:user.lastname,
            username:user.username
},
        config.get('jwtkey'),
        {expiresIn:3600},
        (err,token)=>{
            if(err)
            throw err;
            return res.status(200).json({
                message:'Authentication sucessfull',
                id:user._id,
                token:token,
                firstname:user.firstname,
                lastname:user.lastname,
                username:user.username
            })
        }
    )
    
}).catch((err)=>{return res.json({err:"Wrong password"})});
                

}).catch((err)=>{return res.json({err:"User name does not exists"})});


} 
