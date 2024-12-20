const express=require("express");
const urlRoute= require("./routes/url");
const staticRoute=require("./routes/staticRouter");
const {connectToMOngo}=require("./connection");
const path=require("path")

const URL=require("./models/urls");
const app=express();
const PORT=8001;

connectToMOngo("mongodb://localhost:27017/short-url")
.then(()=> console.log("MongoDB connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


app.use(express.json());
app.use("/url", urlRoute);
app.use("/",staticRoute);

app.get("/test",async (req,res)=> {
   const allUrls=await URL.find({});
    return res.render("AllUser",{
        urls:allUrls,
    });
})



app.get("/url/:shortId",async (req,res)=>
{
    const shortId=req.params.shortId;

    const entry =await URL.findOneAndUpdate({
        shortId},{$push:{
            visitHistory:{
                timestamp:Date.now(),
            },
        },
    }
    );
    res.redirect(entry.redirectURL);
})

app.listen(PORT,()=> console.log("Server started at Port: ${PORT}"));
