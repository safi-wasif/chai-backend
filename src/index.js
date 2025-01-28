import dotenv from "dotenv"

import mongoose from "mongoose"
import {DB_NAME} from "./constants.js"
import express from "express"
import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{app.listen(process.env.PORT || 8000 , ()=>{
    console.log('server running at ',process.env.PORT)
})})
.catch((err)=>{console.log("mongo db connection failed")})

//const app =express()


// ( async ()=> {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         application.on("error" ,  (error)=>{console.log("err: ", error)});
//         throw error

//         app.listen(process.env.PORT , ()=>{
//             console.log(`app is listening on port: ${process.env.PORT}`)
//         })
//     }

    
//     catch(error){
//         console.error("ERR");
//         throw error
//     }
// })()