import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import authRoutes from "./routes/authRoutes.js"
import {createServer } from "http";       // socket.io Connection 
import { Server } from "socket.io"; 
import Message  from "./models/Message.js " ;


configDotenv();

// Instalaztion 
const app =express();

app.use(cors());
app.use(express.json())


const httpServer = createServer(app)     // App change Http Server

const io = new Server(httpServer ,{       // socket Connect to cors
   cors:{  
      origin:"*",     // access every froentend
      methods:["GET" , "POST"]
   }
})

// Socket io connect the user on click 

io.on("connection", async (socket) => {
  console.log("🟢 A user connected:", socket.id);

  //  load 50 + old message 
  try {
    const oldMessages = await Message.find().sort({ createdAt: 1 }).limit(50);
    socket.emit("load_old_messages", oldMessages);
  } catch (err) {
    console.log("Error loading messages", err);
  }

  // save new message on database 
  socket.on("send_message", async (data) => {
    try {
      const newMsg = new Message({
        user: data.user,
        text: data.text,
        time: data.time
      });
      await newMsg.save();  // save database func

      // share to all 
      socket.broadcast.emit("receive_message", data); 
    } catch (err) {
      console.log("Error saving message", err);
    }
  });

  socket.on("disconnect", () => {
    console.log("🔴 User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000      // Port 

app.use("/api/auth" ,authRoutes )   //Routes


// Mongoose Connection 

 mongoose.connect(process.env.MONGO_URL) 
 .then(()=>{
    console.log(" Sucessfully Connected Mongoose")
 }) .catch((error)=>{
    console.error("Something Error In Mongoose");   
 })



app.get("/api/data",(req , res)=>{  res.send({Name:"Kalai" , Age: 21 , skill: "React Devloper"})})  

// Server Run 
httpServer.listen(PORT,()=>{
    console.log("Server Is Running in Without Error 👍")})