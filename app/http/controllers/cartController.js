function cartControl() {
    return{
        cart(req,res){
            res.render('cart/cart')
        }
    }
}

module.exports=cartControl

