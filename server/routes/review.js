const router = require('express').Router();
const review = require('../model/experiments');


router.get('/review',async(req,res)=>{
    const data = await review.find({});
    res.status(200).send(data);
});

module.exports = router;