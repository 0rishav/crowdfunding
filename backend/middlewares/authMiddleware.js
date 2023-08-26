const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const userModel = require("../models/userModel")

const authMiddleware = asyncHandler(async(req,res,next) => {
    let token;
    if(req?.headers?.authorization?.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
        try {
            if(token){
                const decoded = jwt.verify(token, process.env.JWT_SECRET)
                const user = await userModel.findById(decoded?.id)
                req.user = user;
                next();
            }
        } catch (error) {
            throw new Error("Not Authorized token Expired. Please Login Again")
        }
    }else{
        throw new Error("There is no Token attached to header")
    }
})

const isAdmin = asyncHandler(async(req,res,next) => {
    const {email} = req.user;
    const adminUser = await userModel.findOne({email})

    if(adminUser.role !== "admin"){
        throw new Error("You are not an Admin")
    }
    else{
        next();
    }
})

module.exports = {authMiddleware ,isAdmin}