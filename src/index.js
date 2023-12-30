import dotenv from "dotenv"
// require('dotenv').config({path:'./env'})
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})

// Approach 2
connectDB()
.then(
    ()=>{

        // for app when there is some errror
        app.on("error" , (error)=>{
            console.log("ERRR",error);
            throw error
        })


        // For listing of app
        const port = process.env.PORT;
        app.listen(port||8000 , () => {
            console.log(`Server is running at Port ${port}`);
        })

    }
)
.catch((err) => {
    console.log("Mongodb connection FAILED",err);
})











/*  Approach 1
import { express } from "express";

// function connectDB(){}
// connectDB()

const app = express();

// torant function execute kar do (It is also known as ifis)
( async () => {
    try{
       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       app.on("errror",(error) => {
        console.log("ERRR: ",error);
        throw error
       })


       app.listen(process.env.PORT, ()=>{
        console.log(`App is listing on the port ${process.env.PORT}`);
       })
    }
    catch(error){
        console.error("ERROR:",error)
        throw err
    }
} )()

*/