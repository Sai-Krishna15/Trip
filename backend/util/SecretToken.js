const jwt = require('jsonwebtoken')
const jwt_secret_key = 'helloToken'
module.exports.createSecretToken = (id) =>{
    return jwt.sign({id},jwt_secret_key,{
        expiresIn:3*24*60*60
    })
}