const test = (req,res)=> {
    try {
        
    res.status(200).send("TEajs Surve !!!")
    } catch (error) {
        
        res.status(200).send({msg: "Error in test API"})
    }
}
export { test }