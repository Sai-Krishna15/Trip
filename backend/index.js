const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const Route = require('./Routes/Route')
const app = express()
app.use(cookieParser())
const PORT = 4000;
app.use(cors({
    origin:['http://localhost:3000'],
    methods:['POST','GET'],
    credentials:true
}));
app.use(express.json());

//connection to database
const connectDB = async() =>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/Trip')
        .then(()=>console.log('connected to database'))
    }
    catch(err){
        console.log(err);
    }
}
connectDB()

app.use('/',Route)
app.listen(PORT,()=>console.log(`connected to ${PORT}`))
