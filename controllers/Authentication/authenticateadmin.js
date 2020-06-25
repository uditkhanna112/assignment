var express=require('express');
var Admin=require('../../models/admin.model');
var bcrypt=require('bcryptjs');
var jwt=require('jsonwebtoken');
var config=require('config');

module.exports=function(req,res){


    //user provides input
    const {username,password}=req.body;

    //checks whether the username  exists or not
    Admin.findOne({username})
    .then(user=>{
        if(!user)
       return res.status(400).json({msg:'User does not exist'});

//matches password
        bcrypt.compare(password,user.password)
        .then(isMatch=>{
           if(!isMatch)
         return   res.status(401).json({msg:'Invalid credentials'});
            
         //generating jwt token
         const data= jwt.sign(
                {id:user.id,
                username:user.username,
                },
                config.get('jwtadmin'),
                {expiresIn:3600},
                (err,token)=>{
                    if(err)
                    throw err;
                    return res.status(200).json({
                        message:'Authentication sucessfull',
                        username:user.username,
                        token:token,
                        data:data
                    })
                                            }
                                        )
                                    }).catch((err)=>{return res.json({err:"Wrong password"})});
                

                                }).catch((err)=>{return res.json({err:"User name does not exists"})});
                                
                            }
