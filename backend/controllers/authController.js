const AsyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const { generateRefreshToken } = require("../config/refreshToken");
const { generateToken } = require("../config/jwtToken");
const bcrypt = require("bcrypt")


const RegisterUser = AsyncHandler(async(req,res)=>{
    const email = req.body.email;
    const finduser = await userModel.findOne({email:email})
    if(!finduser){
       const newUser = await userModel.create(req.body);
       return res.json({
        success:true,
        msg:"User Register Successfully",
        newUser,
       })
    }else{
        throw new Error("Email Already exist! Try Another One")
    }
});

const LoginUser = AsyncHandler(async(req,res) => {
   const {email, password} = req.body;
   const findUser = await userModel.findOne({ email });
   if (findUser && (await findUser.isPasswordMatched(password))) {
 
     const RefreshToken = await generateRefreshToken(findUser?._id)
     const updateuser = await userModel.findByIdAndUpdate(findUser.id,{
         RefreshToken:RefreshToken,
     },{new:true})
     res.cookie("refreshToken",RefreshToken,{
         httpOnly:true,
         maxAge: 72 * 60 * 60 * 1000,
     })
     res.json({
       _id: findUser?._id,
       firstname: findUser?.firstname,
       lastname: findUser?.lastname,
       email: findUser?.email,
       mobile: findUser?.mobile,
       password: findUser?.password,
       token: generateToken(findUser._id),
       success: true,
       msg: "Logged In Successfully",
     });
   } else {
     throw new Error("Invalid Credentials");
   }
})

const loginAdmin = AsyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const findAdmin = await userModel.findOne({ email });
    if(findAdmin.role !== "admin")
    throw new Error("Not Authorized")
    if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
  
      const RefreshToken = await generateRefreshToken(findAdmin?._id)
      const updateuser = await userModel.findByIdAndUpdate(findAdmin.id,{
          RefreshToken:RefreshToken,
      },{new:true})
      res.cookie("refreshToken",RefreshToken,{
          httpOnly:true,
          maxAge: 72 * 60 * 60 * 1000,
      })
      res.json({
        _id: findAdmin?._id,
        firstname: findAdmin?.firstname,
        lastname: findAdmin?.lastname,
        email: findAdmin?.email,
        mobile: findAdmin?.mobile,
        password: findAdmin?.password,
        token: generateToken(findAdmin._id),
        success: true,
        msg: "Logged In Successfully",
      });
    } else {
      throw new Error("Invalid Credentials");
    }
  });

  const handleToken = AsyncHandler(async(req,res) => {
    const cookie = req.cookies;
    
    if(!cookie?.refreshToken) throw new Error("No Refresh Token In Cookies");
        const refreshToken = cookie.refreshToken
        
        const user = await userModel.findOne({refreshToken})
        if(!user) throw new Error("No Refresh Token in DB or not matched")
        jwt.verify(refreshToken,process.env.JWT_SECRET, (err,decoded) => {
            if(err || user.id !== decoded.id){
                throw new Error("There is something wrong with refresh token")
            }
            const accessToken = generateToken(user?._id)
            res.json(accessToken)
    })
})


const forgotPassword = AsyncHandler(async(req,res) => {
    const { email, question, newPassword } = req.body;
    if (!email || !question || !newPassword) {
      return res.status(400).send({ message: "All fields are mandatory" });
    }

    // check email or answer:--
    const user = await userModel.findOne({ email, question });
    // validation:--
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong email or answer",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    await userModel.findByIdAndUpdate(user._id, { password: hashedPassword });
    res.status(200).send({
      success: true,
      message: "password reset successfully",
    });
})

const logoutHandler = AsyncHandler(async(req,res) => {
    const cookie = req.cookies;
    
    if(!cookie?.refreshToken) throw new Error("No Refresh Token In Cookies");
        const refreshToken = cookie.refreshToken
        const user = await userModel.findOne({refreshToken})
        if(!user){
            res.clearCookie("refreshToken",{
                httpOnly:true,
                secure:true,
            });
            return res.sendStatus(204);
        }
        await userModel.findOneAndUpdate(refreshToken,{
            refreshToken:"",
        });
        res.clearCookie("refreshToken",{
            httpOnly:true,
            secure:true,
        });
        return res.json({
            success:true,
            msg:"Logout Successfully",
            sendStatus:204
        })
})


module.exports = { RegisterUser,LoginUser,loginAdmin, handleToken,logoutHandler,forgotPassword}