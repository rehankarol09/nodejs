import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/",(req,res)=>{
console.log("Test",process.env.PORT)    
return res.send("Hello");
})

app.listen(process.env.PORT || 8000,()=>{
    console.log("Server connected",process.env.PORT)
})