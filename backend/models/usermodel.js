const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:new Date()
    }
})
userSchema.pre('save',async function(){
    this.password = await bcrypt.hash(this.password,12);
})

module.exports = mongoose.model('Users',userSchema)