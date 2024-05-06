import express from "express";
const app = express.Router();
import {coffee} from "./../models/getCoffeeSchema.js"

const testAPi =  app.get("/test",(req,res)=> {
    res.send("TEajs Surve")
})

const postCoffeeApi = app.post("/addCoffee",async(req,res) => {
    try {
        if (Array.isArray(req.body)) {
            const bodyLength = req.body.length;
          for(let i = 0 ; i < bodyLength; i ++){
            const {name, description, price, extras, type, wishlisted } = req.body[i];
            const newCoffee = new coffee({
                name, description, price, extras, type, wishlisted
            });
            await newCoffee.save();
        }
            
        }
       
        
       
       //console.log("savedCoffee",savedCoffee)
        res.status(200).send("success");
    } catch (error) {
        res.status(400).send({
            message: `postCoffeeApi : ${error.message}`
        });
    }
});

export { testAPi , postCoffeeApi }
