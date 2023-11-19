const homeControl=require('../app/http/controllers/homeController')
const aboutControl=require('../app/http/controllers/aboutController')
const cartControl = require('../app/http/controllers/cartController')
const loginControl = require('../app/http/controllers/loginController')
const menuControl = require('../app/http/controllers/menuController')
const offersController = require('../app/http/controllers/offersController')

function initRoutes(app){
    //// home route
    app.get('/',homeControl().index)
    //about route
    app.get('/about',aboutControl().about)
    //cart route
    app.get('/cart',cartControl().cart)
    //login
    app.get('/login',loginControl().login)
    //menu
    app.get('/menu',menuControl().menu)
    //offers --> to be created
    app.get('/offers',offersController().offers)
}   

module.exports = initRoutes