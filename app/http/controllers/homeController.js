function homeController(){
    return{
        index(req,res){
            res.render('index')
        }
    }
}

module.exports = homeController