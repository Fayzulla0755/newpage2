const express=require("express")
const app=express()
const mongodb=require("mongoose")
const bodyParser=require("body-parser")
const path=require("path")
const port=(process.env.PORT ||'3000')
const rDirector=require("./routers/director")
const rMovies=require("./routers/movies")
const { default: mongoose } = require("mongoose")



mongoose.connect("mongodb://localhost:27017/newpage1")
const db=mongoose.connection

db.on("open" ,()=>{
    console.log("mongodb runing");
})
db.on("error",(err)=>{
    console.log(err);
})


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(rMovies)
app.use(rDirector)


app.listen(port,()=>{
    console.log("server runing");
})

