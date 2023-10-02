const express = require('express')
const app= express()
const path=require('path')
const ejs=require('ejs')
const expresLayout=require('express-ejs-layouts')
const { setEngine } = require('crypto')
const PORT= process.env.PORT || 3000


app.get('/', (req,res)=>{
    res.render('home')
})

app.use(express.static('public'))

//set template engine
app.use(expresLayout)
app.set('views', path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')
app.listen(PORT, () =>{
    console.log(`Harsh is the done coder ever  ${PORT}`)
})