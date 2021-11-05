const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require('mongoose');
const port = 8080;

const app = express();
app.use(bodyParser.json());

app.use(session({
    secret: 'Andy Mystic Luna Jiemei',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}));

app.use(passport.initialize());
app.use(passport.session());

//Connect to mongoDB
mongoose.connect('mongodb://localhost:27017/noteUserDB');

const userSchema = new mongoose.Schema({
    username: String,
    password: String 
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('user', userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Home Route
app.get("/", (req: any, res: any) =>{
    res.send("Hello, word!")
});

//Sign Up page
app.get("/sign_up", (req: any, res: any) =>{    
    console.log("sign up page");
    res.send("sign up!");
});

app.post("/sign_up", (req: any, res: any) =>{
    console.log("post user info");
    console.log(req.body.username);


    User.register({username: req.body.username}, req.body.password, (err: any, user: any) =>{
        if (err) {
            console.log(err);
            if (err.name == "UserExistsError") console.log("Account exist");
            res.redirect("/sign_up");
        }
        else{
            passport.authenticate("local")(req, res, () =>{
                // res.redirect("/note");
                console.log('new user')
              });
        }
    });

});

//Log in page
app.get("/log_in", (req: any, res: any) =>{
    console.log("log in page");
    res.send("Log in!");
});

app.post("/log_in", (req: any, res: any) =>{
    console.log("Login info")
    const user = new User({
        username: req.body.username,
        password: req.body.password
      });
    
      req.login(user, function(err: any){
        if (err) {
          console.log(err);
        } else {
          passport.authenticate("local")(req, res, () =>{
            console.log("login success")
            //res.redirect("/note");
          });
        }
      });
});

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`) 
});