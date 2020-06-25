var Admin=require('../..//models/admin.model');
var bcrypt=require('bcryptjs');
var jwt=require('jsonwebtoken');
var config=require('config');

//export newAdmin controller
module.exports=function(req,res){
    const {firstname,lastname,username,password}=req.body;
    
    //Check if the Admin already exists
    Admin.findOne({username})
.then(user=>{
    if(user)
    return res.status(400).json({msg:'User already exists'});

    const newUser=new Admin({
        username,
        password,
    });

    //Encrypting the password
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            console.log(hash);
            if(err)
            throw err;
            newUser.password=hash;
            newUser.save()
            .then(user=>{

//Generating token using jwt
const token=jwt.sign(
    {id:user.id,
    username:user.username,
},
    config.get('jwtadmin'),
    {expiresIn:3600},
    (err,token)=>{
        if(err)
        throw err;
        res.json({
            user:{
                token,
                id:user.id,
                username:user.username,
            }
        })
    }
)
}).catch(err=>console.log(err));;
        })
    })

}).catch(err=>console.log(err));
}
