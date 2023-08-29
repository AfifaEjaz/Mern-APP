const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        require : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    contact : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true,
        default : "user"
    },
    profile : {
        type : String,
        default : "http://cdn.onlinewebfonts.com/svg/img_206976.png"
    },
    joining : {
        type : Date,
        default : Date.now
    }
})

const User = model('user', UserSchema)
module.exports = User