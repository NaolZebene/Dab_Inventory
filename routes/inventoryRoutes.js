const express = require('express')
const router = express.Router();
const{HomePage,AddProductForm,AddProduct, showProduct ,deleteProduct, editProductForm,editProduct} = require('../controls/Inventory')

router.get('/',HomePage);
router.get('/addproduct',AddProductForm); 
router.get('/showproduct',showProduct);
router.get('/showProduct/:id',editProductForm)

router.post('/addproduct',AddProduct); 

router.put('/showproduct/:id/edit',editProduct)

router.delete('/showproduct/:id',deleteProduct);

module.exports = router;