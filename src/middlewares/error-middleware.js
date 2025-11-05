const errorMiddleware = (err, req, res, next) => {
    console.log("errorMiddleware", err);
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    const extraDetails = err.extraDetails || "Error from Backend";
    return res.status(status).json({
        
        message,
        extraDetails
    });
    
}

export { errorMiddleware }