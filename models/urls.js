const mongoose=require("mongoose");

const urlSchema= new mongoose.Schema({
    shortId:{
        type:String,
        unique:true,
        required:true,
    },
    redirectURL:{
        type:String,
        required: [true, 'Path `redirectUrl` is required.'],
    },
    visitHistory:[{timestamp:{type:Number}}],
},{timestamps:true});

const URL=mongoose.model("url", urlSchema);

module.exports=URL;




