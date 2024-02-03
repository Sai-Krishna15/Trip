const usermodel = require('../models/usermodel');
const User = require('../models/usermodel');
const {createSecretToken} = require('../util/SecretToken');
const bcrypt = require('bcrypt')
module.exports.Signup = async(req,res,next) =>{
    try{
        const {email,password,username,date} = req.body
        const existingUser = await User.findOne({email:email})
        if(existingUser){
            return res.json({message:'User Already Exist,Please Login'})
        }
        if(!email || !password || !username){
            return res.json({message:'Please Fill All Fields'})
        }
        if(password.length <= 8){
            return res.json({message:'Password must contains atleast 8 characters'})
        }
        const user = await User.create({email,password,username,date})
        const token = createSecretToken(user._id)
        res.cookie('token',token,{
            withCredentials:true,
            httpOnly:false
        })
        res.status(201).json({message:'User Registered in Successfully,Please Login',success:true,user})
        next()
    }catch(error){
        console.log(error)
    }
    
}

module.exports.Login = async(req,res,next)=>{
    try{
        const {email,password} = req.body
        if(!email || !password){
            return res.json({message:'All Fields are Required'})
        }
        const user = await User.findOne({email:email})
        if(!user){
            return res.json({message:'User not Found,Please Signup'})
        }
        const auth = await bcrypt.compare(password,user.password)
        if(!auth){
            return res.json({message:'Incorrect Password or Email'})
        }
        const token = createSecretToken(user._id)
        res.cookie("token",token,{
            withCredentials:true,
            httpOnly:false
        })
        res.status(201).json({message:'user Logged in Successfully',success:true})
        next()
    }catch(error){
        console.log(error);
    }
}