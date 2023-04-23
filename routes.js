const express = require('express');
const Model = require('../model/model');
const router = express.Router()

module.exports = router;

router.post('/signup', async (req, res) => {
    const data = new Model({
        uid: req.body.uid,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
//Get all Method
router.get('/getuser', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/login',async (req, res) => {
    try{
        const data = await Model.findOne({uid: req.body.uid,password:req.body.password});
        inf=res.json(data)
        console.log(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.delete('/delete/',async (req, res) => {
    try{
        const data = await Model.findOneAndDelete({uid: req.body.uid});
        inf=res.json(data)
        console.log(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})