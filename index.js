require('dotenv').config()


const express = require('express'); 
const path = require('path'); 
const app = express(); 
const ejs = require('ejs'); 
const ejsMate = require('ejs-mate'); 
const homePageRoute = require('./routes/inventoryRoutes');
const mongoose = require('mongoose'); 
const methodOverride = require('method-override');
const session = require('express-session'); 
const Auth = require('./model/Auth')
const passport = require('passport'); 
const localStrategy = require('passport-local');
const stocksRoute = require('./routes/stockInAndOutRoute')
const employeesRoute = require('./routes/employeesRoute')

mongoose.connect("mongodb://localhost/dab-inventory", {
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(function(){
    console.log("Database Connected Successfully"); 
}).catch(function(err){
    console.log("Error while connecting a database")
    console.log(err);
})



const PORT = process.env.PORT;



app.engine('ejs', ejsMate)
app.set('view engine','ejs'); 
app.set('views', path.join(__dirname,'/views')); 


const sessionConfig = {
    secret: "thisisthesecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  };

app.use(express.urlencoded({extended:true})); 
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(methodOverride("_method"));
app.use(session(sessionConfig));
app.use(passport.initialize()) 
app.use(passport.session()); 
passport.use(new localStrategy(Auth.authenticate()))
passport.serializeUser(Auth.serializeUser()); 
passport.deserializeUser(Auth.deserializeUser());

app.use('/',homePageRoute);
app.use('/employees',employeesRoute);

app.use('/stocks',stocksRoute); //***Stocks in and out route goes Here ** 


app.listen(PORT, function(req,res){
    console.log(`LISTENING ON PORT ${PORT}`)
})