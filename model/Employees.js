const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const employeesSchema = new Schema({
    employeeName:{
        type:String, 
        required:true
    }, 
    employeeAddress:{
        type:String, 
        reqiured:true
    }, 
    employeePhoneNumber:{
        type:String, 
        required:true
    }, 
    employeeEmail:{
        type:String, 
        required:true
    }, 
    employeePosition:{
        type:String, 
        required:true
    }, 
    employeeStatus:[
        {
            type:mongoose.Schema.Types.ObjectId, 
            ref:'Product'
        }
    ]
    
})

const Employees = mongoose.model('Employees',employeesSchema); 

module.exports = Employees; 