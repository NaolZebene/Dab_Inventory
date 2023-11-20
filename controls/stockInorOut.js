const Users = require('../model/Users');
const Product = require('../model/Product') 
const Employees = require('../model/Employees');
const mongoose = require('mongoose'); 



module.exports.showStocks =  async function(req,res){
    const datas = await Users.find(); 
    res.render("Stocks/showStockOut", {datas})
}

module.exports.addStocksForm = function(req,res){
    res.render('Stocks/addStocksForm');
    
}
module.exports.addStocks = async function(req,res){
   let {userName, userProduct, dateOfStockOut,expectedDateOfReturn} = req.body; 
   userName = userName.toLowerCase(); 
   dateOfStockOut = new Date(dateOfStockOut); 
   expectedDateOfReturn = new Date(expectedDateOfReturn);
   const productDatas = await Product.find({"productSerialNumber": userProduct}); 
   const stockOutProduct = userProduct; 
   const stockOutProductModel = productDatas[0].productModel; 
   const alldatas = {userName, dateOfStockOut, expectedDateOfReturn,stockOutProductModel, stockOutProduct};
   const insertedData = new Users(alldatas); 
   await insertedData.save()

    // const data = req.body; 
    // let { userName,userProduct, dateOfStockOut,expectedDateOfReturn} = req.body;
    // userName = userName.toLowerCase()
    // let stocksInfo = {userName,dateOfStockOut, expectedDateOfReturn};
    // dateOfStockOut = new Date(dateOfStockOut); 
    // expectedDateOfReturn = new Date(expectedDateOfReturn); 
    // let productData = await Product.find({"productSerialNumber": userProduct});
    // let employeeInfo = await Employees.find({"employeeName":userName}); 
    // employeeInfo = {...employeeInfo};
    // // console.log("Employee Info",employeeInfo); 
    // // console.log( "Product Info",productData);
    // const stockStatus = new Users(stocksInfo); 
    // employeeInfo[0].employeeStatus.push(productData[0]); 
    // // console.log("Employee Status info", employeeInfo[0].employeeStatus);
    // await stockStatus.save() ; 
    // await employeeInfo[0].save(); 
    // res.send("data inserted Successfully")
}
module.exports.stockReturned = async function(req,res){
    const { id } = req.params; 
    const data = await Users.findOneAndUpdate({_id:id}, {isReturned:"returned"});
    const name = data.userName; 
    const employeeData = await Employees.find({"employeeName":name}); 
    employeeData[0].employeeStatus.push(data); 
    employeeData[0].save(); 
    res.redirect('/stocks')
}
module.exports.stockLost = async function(req,res){
    const { id } = req.params; 
    const data = await Users.findOneAndUpdate({_id:id}, {isReturned:"lost"});
    const name = data.userName; 
    const employeeData = await Employees.find({"employeeName":name}); 
    employeeData[0].employeeStatus.push(data); 
    employeeData[0].save(); 
    res.redirect('/stocks')
}