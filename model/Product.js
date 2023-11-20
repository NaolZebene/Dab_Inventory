const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

productSchema = new Schema({
    productModel:{
        type:String, 
        required:true
    },
    productType:{
        type:String, 
        required:true,  
    }, 
    productSerialNumber:{
        type:String, 
        required:true, 
    }
})

Product = mongoose.model('Product',productSchema);
module.exports = Product;