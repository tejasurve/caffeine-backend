
const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 422;
        const message = err.issues[0].message;
        const error = {
            status,
            message
        }
        next(error);
        
        // res.status(400).json({
           
        //     message: `verifiction failed - ${err.issues[0].message}`
        // });
    }
} 
export { validate }