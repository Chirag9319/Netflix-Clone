import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path:"../.env"
})
const dbconnection = () =>{
    mongoose.connect('mongodb+srv://chirag9319630078:netflix@chirag.gfyjy.mongodb.net/').then(()=>{
        console.log("mongodb connected");   
    }).catch((error)=>{
          console.log(error);    
    })
};

export default dbconnection;