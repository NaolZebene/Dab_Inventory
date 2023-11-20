const express = require('express'); 
const router = express.Router(); 
const {showStocks, addStocksForm,addStocks,stockReturned,stockLost} = require('../controls/stockInorOut')

router.get('/',showStocks);
router.get('/addStocks',addStocksForm);

router.post('/addStocks', addStocks);
router.post('/returned/:id',stockReturned); 
router.post('/lost/:id', stockLost);




module.exports = router;