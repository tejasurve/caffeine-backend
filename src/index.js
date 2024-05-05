import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";


connectDB();






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