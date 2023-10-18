const express = require('express')
const app= express()
const path=require('path')
const ejs=require('ejs')
const expresLayout=require('express-ejs-layouts')
const { setEngine } = require('crypto')
const PORT= process.env.PORT || 3000

app.use(express.static('public'))

//set template engine
app.use(expresLayout)
app.set('views', path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about/about')
})

app.get('/cart',(req,res)=>{
    res.render('cart/cart')
})

app.get('/login',(req,res)=>{
    res.render('auth/login')
})

app.get('/menu',(req,res)=>{
    res.render('menu/menu')
})

app.listen(PORT, () =>{
    console.log(`Harsh is the done coder ever  ${PORT}`)
})