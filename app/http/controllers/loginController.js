function loginControl(){
    return{
        login(req,res)
        {
            res.render("auth/login")
        }
    }
}

module.exports= loginControl