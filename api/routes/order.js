const express = require('express');
const router= express.Router()


// Handle Incoming Get request to /orders
router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'orders were fetched'
    })
})

router.post('/',(req,res,next)=>{
    const order= {
        productId: req.body.productId,
        quantityc : req.body.quantity
    }
    res.status(201).json({
        message:'orders were created',
        order:order
    })
}) 

router.get('/:orderID',(req,res,next)=>{
    res.status(200).json({
        message:'orders details',
        orderId: req.params.orderID
    })
}) 

// delete

router.delete('/:orderID',(req,res,next)=>{
    res.status(200).json({
        message:'orders deleted',
        orderId: req.params.orderID
    })
}) 
 

module.exports= router;