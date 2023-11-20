const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const passportLocalMongoose = require('passport-local-mongoose');
userSchema = new Schema({
    username:{
        type:String, 
        required:true, 
        unique:true
    },
    password:{
      type:String, 
      required:true

    }
})

userSchema.plugin(passportLocalMongoose); 

User = mongoose.model('User',userSchema); 
module.exports = User;
