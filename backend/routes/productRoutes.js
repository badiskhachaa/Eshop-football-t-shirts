const express = require('express');
const router  = express.Router();
const {getProducts,
       getProductById,
} = require('../controller/productControllers');
//desc  ge all products from DB
// route get /api/products
// acccess public 
router.get('/',getProducts);

//desc  ge all products by id from DB
// route get /api/products
// acccess public 
router.get('/:id',getProductById);

module.exports = router;