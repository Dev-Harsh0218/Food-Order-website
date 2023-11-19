const mongoose=require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
    i_id:{type:String ,requried:true},
    i_name:{ type:String, required:true},
    i_price:{ type:Number, required:true},
    i_category:{type:String, required:true}
})
module.exports = mongoose.model('Menu',menuSchema)