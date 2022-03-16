const mongoose=require("mongoose")
const schema=mongoose.Schema

const mongodb=new schema({

    title:{
        type:String,
        required:true
    },
    categore:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    director:{},
    imdb_score:{
        type:Number,
        default:0
    }
})

module.exports=mongoose.model("Movies",mongodb) 