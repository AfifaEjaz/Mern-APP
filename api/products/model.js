const { Schema, model } = require('mongoose')

const ProductSchema = new Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    price : {
        type : Number,
        required : true,
    },
    category : {
        type : String,
        required : true,
    },
    brand : {
        type : String,
        required : true,
    },
    thumbnail : {
        type : String,
        required : true,
    },
    images: [
        {
          type: String,
          required: true,
          default: "https://www.namepros.com/attachments/empty-png.89209/",
        },
      ],
    description : {
        type : String,
        required : true,
    }
})

const Product = model('product', ProductSchema)
module.exports = Product