import express from "express";
import dbconnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./route/userRoute.js"
import cors from "cors";


const app = express();
dbconnection();

app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(express.json());

const corsOptions ={
    origin:"http://localhost:5173",
    credentials:true
}
app.use(cors(corsOptions));

app.use("/api/v1/user",userRoute);

app.listen(3002,()=>{
    console.log(`server listen at port 3002`);
    
});