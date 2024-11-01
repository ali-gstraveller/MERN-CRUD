const express = require('express');
const router = express.Router();
const Users = require('../models/Users');

const monckData =[
    {
        "id":"1",
        "name":"ali ajaz"
    },
    {
        "id":2,
        "name":"kashif"
    }
]

router.get('/all', async  (req,res)=>{

    const users = await Users.find({});
    res.send(users)
});

router.get('/:id' ,async (req,res)=>{
        const {id}  = req.params
        const user = await Users.findOne({ _id : id} );
        res.send(user)
})

router.post('/add',    async (req,res)=>{

    try{
        console.log(req.body)
        const users = new Users (req.body);
        await users.save();
        res.send ( {  message: "data added success", data : req.body  })

    }

    catch(e){

        res.send({message:e})

    }

})

router.put('/update/:id' , async(req,res)=>{

        const {id} = req.params
         console.log("req.body",req.body)
        try{
            const users = await Users.findByIdAndUpdate( id,
                { $set: { name: req.body.name, age:req.body.age  } },
                { new: true, runValidators: true });
            res.send({message:"data updated success"  ,data:users  }  )
        }
        catch(e){
            res.send({message:e})
        }
}  );


router.delete('/delete/:id'  ,async (req,res)=>{

        const { id } = req.params;
        try{
            const users = await Users.findByIdAndDelete(id);
            res.send( {  message:'data deleted success' });
        }
        catch(e){
            res.send({message:e})
        }

})















module.exports = router ;
