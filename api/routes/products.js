const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')

const Product = require('../modals/product')


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET request to /products"
    })
})
router.post('/', (req, res, next) => {

    // without database

    // const product ={
    //     name: req.body.name,
    //     price: req.body.price,
    // };

    // with database
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    })


    res.status(201).json({
        message: "Handling POST request to /products",
        createdProduct: product
    });
    product.save()
    .then(result =>{
        console.log(result);
    })
    .catch(err=>console.log(err));
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    // if (id === 'special') {
    //     res.status(200).json({
    //         message: "You discovered the special ID",
    //         id: id
    //     })
    // }
    // else {
    //     res.status(200).json({
    //         message: "You passed an ID"
    //     })
    // }


   Product.findById(id)
   .exec()
   .then(doc=>{
    console.log("From Database",doc);
    res.status(200).json({doc})
   }).catch(err2=>{
     console.log(err2);
     res.status(500).json({error :err2})
    })
})

// ------Patch ------------

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Updated Product !"
    })
})
// ------Delete ------------

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Deleted Product !"
    })
})


module.exports = router;