function aboutControl()
{
    return {
        about(req,res){
            res.render('about/about')
        }
    }
}

module.exports=aboutControl