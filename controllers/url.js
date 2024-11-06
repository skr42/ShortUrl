const shortid=require("shortid");

const URL=require("../models/urls");


async function handleGenerateNewShortUrl(req,res){
    const body=req.body;
    console.log(body);
    if (!body.url) return res.status(400).json({error:"url is required"})
    const shortID=shortid();
    await URL.create({
        shortId:shortID,
        redirectURL:body.url,
        visitHistory:[],
    });

    return res.json({id:shortID})


};

async function handleGetAnalytic(req,res){
    const shortId=req.params.shortId;

    const result=await URL.findOne({ shortId });

    return res.json({TotalClicks:result.visitHistory.length,analytics:result.visitHistory,});

}

module.exports={
    handleGenerateNewShortUrl,
    handleGetAnalytic,
    
}
