/////// import shittttt
//dotenv for you know thats how we do it in MERN
require('dotenv').config()
//expresss
const express = require('express')
const app= express()
const path=require('path')
///ejs and stufff
const ejs=require('ejs')
const expresLayout=require('express-ejs-layouts')
//serving port
const PORT= process.env.PORT || 3000
//db
const mongoose = require('mongoose')
//session shittt
const session=require('express-session')
const MongoDbStore=require('connect-mongo')
const flash=require('express-flash')


//// db connection
try {
    const db_connection = mongoose.connect('mongodb://127.0.0.1:27017/Karmic_Kuisine').catch(error => {
        handleError(error);
    });
    mongoose.connection.on('error', err => {
        logError(err);
    });
    console.log('connection done with the mongo')
} 
catch (error) {
  handleError(error);
}

//sessionStore
const mongoStore = MongoDbStore.create({
    mongoUrl:'mongodb://127.0.0.1:27017/Karmic_Kuisine',
    collection: 'session',
    autoRemove:'native',  
})

app.use(session({
    secret: process.env.COOKIE_SECRET || 'Harsh_Bhardwaj',
    resave:false,
    saveUninitialized:false,
    store:mongoStore,
    // cookie:{maxAge: 1000*60*60*24}
    cookie:{maxAge: 1000*60*60*24}
}))


/// for flash messages or normal messages
app.use(flash())
//assets
app.use(express.static('public'))

//set template engine
app.use(expresLayout)
app.set('views', path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

///routes
require('./routes/web')(app)

//consolse.log
app.listen(PORT, () =>{
    console.log(`Harsh is the done coder ever  ${PORT}`)
})