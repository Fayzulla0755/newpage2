const express=require("express")
const router=express.Router()
const director=require("../model/director")

router.get("/api/directors",(req,res)=>{
    director.find({}, (err,data)=>{
        if(err) throw err
        if(data==""){
            console.log("Malumot yoq")

        }
        else{
            res.json(data)
        }
    })
})


router.post("/api/directors",(req, res)=>{
    const {name,surname ,bio}=req.body
    const db=new director({
        name: name,
        surname:surname,
        bio: bio
    })
    db.save().then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    }) 
})



module.exports=router

