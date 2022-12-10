const router = require('express').Router();
const add = require('../model/experiments');

router.post('/add', async(req, res)=>{
    // add.create(req.body).then(experiments =()=>{
    //     res.send({
    //         expName:req.body.expName,
    //         Description:req.body.Description,
    //         level:req.body.level,
    //         subject:req.body.subject,
    //         matName:req.body.matName,
    //         matQty:req.body.matQty,
    //         safetyPercautions:req.body.safetyPercautions,
    //         instructions:req.body.instructions,
    //     });
    // });

    const addContent = new add({
        expName:req.body.expName,
        Description:req.body.Description,
        level:req.body.level,
        subject:req.body.subject,
        matName:req.body.matName,
        matQty:req.body.matQty,
        safetyPercautions:req.body.safetyPercautions,
        instructions:req.body.instructions,
    });
    try {
        const val =await addContent.save();
        res.send(val)
    } catch (error) {
        res.status(409).json({message:error.message});
    }
});

router.get('/review',async(req,res)=>{
    const data = await add.find({});
    res.status(200).send(data);
});

module.exports = router;