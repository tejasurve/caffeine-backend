import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import dotenv from "dotenv"
dotenv.config();


connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("Error : ", error);
        throw error
    });
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`Server is running on port ${process.env.PORT}`)
    });
})
.catch((err)=> {
    console.log("MongoDB conectio Failed", err)
});






//CONNECT DB THROUGH INDEX FILE ITSELF
/*
import express from "express";
const app = express();

(async() => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("Error : ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on PORT: ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("ERROR: ", error);
        throw error
    }
})()
**/