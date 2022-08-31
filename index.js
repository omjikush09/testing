import expresss from "express";
import mongoose from "mongoose";

const app=expresss();
import User from "./model.js"




app.get("/",(async (req,res)=>{
    try {
        const user=await user.find({});
        res.json(user);
    } catch (error) {

        res.status(400).json({error});
    }
    // res.send("Hello your Docker is runnig");
}))

app.post("/",async (req,res)=>{
    try {
        const user= new User({
            name:"hello",
            age:15
        })
     const newUser= await user.save();
     res.json(newUser);
    } catch (error) {
        console.log(error)
        res.status(400).json({error});
    }
})

mongoose.connect("mongodb://admin:password@mongodb",{dbName:"next"},(err)=>{
    if(err){
        console.log(err)
    }else{ 
        console.log("Connected to database")
    }
})

const PORT=process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Server is running`);
})