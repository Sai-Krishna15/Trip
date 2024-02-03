const User = require('../models/usermodel')
const jwt = require('jsonwebtoken')
const jwt_secret_key = 'helloToken'
module.exports.userVerification = (req,res) =>{
    const token = req.cookies.token
    if(!token){
        return res.json({status:false})
    }
    jwt.verify(token,jwt_secret_key,async(err,data)=>{
        if(err){
            return res.json({status:false})
        }else{
            const user = await User.findById(data.id)
            if(user){
                return res.json({status:true,user:user.username})
            }else{
                return res.json({status:false})
            }
        }
    })
}