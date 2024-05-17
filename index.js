import express from "express";

const app = express();

app.get("/",(req,res)=>{
console.log("Test",process.env.PORT)    
return res.send("Hello");
})

app.listen("8000",()=>{
    console.log("Server connected")
})