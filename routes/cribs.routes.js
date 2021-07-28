const express = require('express');
const app = express();
const router = express.Router();
const Crib = require('../models/crib.model');
const bodyParser = require('body-parser');

app.use(bodyParser.json());


// Get all Cribs

router.get('/',(req,res)=>{
    Crib.find().then(data=>{
        if(data){
            res.send(data);
        }
        else {
            res.send({message:"The Crib list is empty"})
        }
    })
});


// Get a particular Crib by Id

router.get('/:id',(req,res)=>{
    Crib.findById(req.params.id).then(data=>{
        if(data){
            res.send(data);
        }
        else {
            res.send({message:"The Crib list is empty"})
        }
    })
});

// Create a new Crib

router.post('/',async(req,res)=>{
    const crib = new Crib({
        name: req.body.name,
        img: req.body.img,
        location: req.body.location
    })

    await crib.save().then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.json({message:err});
    })
});


// Update a Crib

router.put('/:id',(req,res)=>{

console.log(req.body);
     Crib.findByIdAndUpdate(req.params.id,req.body,{useFindAndModify:false}).then(data=>{
         if(!data){
             res.status(404).send({message: "Can not update Crib"})
         }else {
            res.send(data)
         }
        
    })
    .catch(err=>{
        res.status(500).json({message:err});
    })
});

// Delete a Crib

router.delete('/:id',(req,res)=>{
    Crib.findByIdAndDelete(req.params.id).then(data=>{
        if(!data){
            res.status(404).send({message: "Can not delete Crib"})
        }else {

            res.send("Sucessfully deleted")
        }
    }).catch(err=>{
        res.status(500).json({message:err});
    })
})





module.exports = router;