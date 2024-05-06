/*
 * Created on Sun May 05 2024
 * Created by Tejas Surve
 *
 * Copyright (c) Tejas Surve
 */

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req,req,next)).catch((err)=> next(err))
    } 
}

export { asyncHandler }


// const asyncHandler = (fn) => 
//     async(req, res, next) => {
//         try {
            
//         } catch (error) {
//             res.status(err.code || 500).json({
//                 status: false,
//                 message: err.message
//             });
//             console.log("ERROR : ", error)
//         }
// }
