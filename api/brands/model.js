const { Schema, model } = require('mongoose')

const BrandSchema = new Schema({
    brandname : {
        type : String,
        required : true,
        unique : true
    },
    logo : {
        type : String,
        default : "https://pic.onlinewebfonts.com/svg/img_367011.png"
    }
   
})


const Brand = model('brand', BrandSchema)
module.exports = Brand