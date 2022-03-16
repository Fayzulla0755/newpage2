const mongoose=require("mongoose")
const schema=mongoose.Schema

const directors= new schema({
    name:{
        type: String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        required: true
    }
})

module.exports=mongoose.model("Director", directors)