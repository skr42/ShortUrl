const mongoose=require("mongoose");

async function connectToMOngo(url){
    return mongoose.connect(url);
}

module.exports={
    connectToMOngo,
}
