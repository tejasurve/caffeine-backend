import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import os from "os";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import dotenv from "dotenv"
import { errorMiddleware } from "./middlewares/error-middleware.js";
dotenv.config();
const getLocalIp = () => {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === "IPv4" && !iface.internal) {
                return iface.address; // return first non-internal IPv4
            }
        }
    }
    return "localhost"; // fallback
};

const PORT = process.env.PORT || 8000;


app.use(errorMiddleware);

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("Error : ", error);
        throw error
    });
    app.listen(PORT, "0.0.0.0", () => {
            const localIp = getLocalIp();
            console.log(`✅ Server is running:`);
            console.log(`   Local:   http://localhost:${PORT}`);
            console.log(`   Network: http://${localIp}:${PORT}`);
        });
})
.catch((err)=> {
    console.log("MongoDB conectio Failed", err)
})




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