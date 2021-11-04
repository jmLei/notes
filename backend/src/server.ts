const express = require("express");
const app = express();
const port = 3000;
const mongoose = require('mongoose');

//Connect to mongoDB
mongoose.connect('mongodb://localhost:27017/noteUserDB');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    userName: String  
});

const User = mongoose.model('user', userSchema);

const user = new User({
    email: "123@gmail.com",
    password: "1234",
    userName: "Andy"
});
user.save().then(() => console.log('new user'));


//Home Route
app.get("/", (req, res) =>{
    res.send("Hello, word!")
});

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`) 
});