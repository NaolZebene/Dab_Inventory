const Product = require('../model/Product')

module.exports.HomePage = function(req,res){
  res.render('home')
}
module.exports.AddProductForm = function(req,res){
   res.render('AddProduct'); 
}

module.exports.AddProduct = async function(req,res){
  const data = req.body; 
  const addedData = new Product(data); 
  await addedData.save(); 
  console.log("Added Data Successfully");
    
}

module.exports.showProduct = async function (req,res){
  const data = await Product.find();
  // console.log(data); 
  res.render('showProduct', { data })
}
module.exports.deleteProduct = async function(req,res){
  const {id} = req.params; 
  await Product.findByIdAndDelete(id); 
  res.redirect('/showproduct');
}

module.exports.editProductForm  = async function(req,res){
  const {id} = req.params;
  const datas = await Product.findById(id); 
  console.log(datas);
  res.render('editProduct',{datas});
}
module.exports.editProduct = async function(req,res){
  const {id} = req.params; 
  const data = req.body; 
  const updatedData = await Product.findByIdAndUpdate(id,data,{runValidators:true});
  await updatedData.save()
  res.redirect('/showproduct');
}