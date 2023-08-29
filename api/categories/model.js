const { Schema, model } = require('mongoose')

const CategorySchema = new Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    image : {
        type : String,
        default : "https://pic.onlinewebfonts.com/svg/img_367011.png"
    }
})

const Category = model('category', CategorySchema)
module.exports = Category