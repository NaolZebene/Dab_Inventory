const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const usersSchema = new Schema({
    userName:{
        type:String, 
        required:true
    }, 
    
    stockOutProductModel:{
        type:String, 
        required :true 
    },
    stockOutProduct:{
        type:String, 
        required: true
    } ,
    
    dateOfStockOut:{
        type:Date, 
        required:true
    }, 
    expectedDateOfReturn:{
        type:Date, 
        required:true
    },
    isReturned :{
        type:String , 
        default:"pending"
    }
})

const Users = mongoose.model('Users', usersSchema); 

module.exports = Users;