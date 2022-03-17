const express=require("express")
const router=express.Router()
const cinima=require("../model/movies")



router.get("/api/movies",(req,res)=>{
    cinima.find({},(err, data)=>{
        if(err) throw err
        if(data==""){
            res.send("Malumot yoq")
        }
        else{
            res.send(data)
        }
    })
})
  router.post("/api/movies",(req ,res)=>{
      const db =new cinima(req.body)
      const promise =db.save()
      promise.then(err=>{
          console.log(err);
      })
      promise.then(data=>{
          res.json(data)
      })

  })

  router.get("/api/movies/:movie_id", (req ,res)=>{
      cinima.findById(req.params.movie_id ,(err, data)=>{
          if(err){
              console.log("id da hatolik bor");
          }
          else{
              console.log("Malumot topildi");
              res.json(data)
          }
      })
  })

  router.put("/api/movies/:movie_id",(req ,res)=>{
      cinima.findByIdAndUpdate(req.params.movie_id, req.body , (err, data)=>{
          if(err) throw err
          res.json(data)
      })
  })
  router.delete("/api/movies/:movie_id " , (req,res)=>{
     cinima.findByIdAndDelete(req.params.movie_id, (err ,data)=>{
        if(err){
            console.log("Xatolik bor");
        }
        else{
            res.json(data)
        }
     })
  })

router.get("/api/movies/top10/cinema",(req,res)=>{
    
})

module.exports=router