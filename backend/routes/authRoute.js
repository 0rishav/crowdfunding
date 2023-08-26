const express  = require("express");
const { RegisterUser, LoginUser, loginAdmin, logoutHandler, forgotPassword } = require("../controllers/authController");

const router = express.Router();

router.post("/register",RegisterUser);

router.post("/login",LoginUser);

router.post("/admin-login",loginAdmin);

router.put("/forgot-password",forgotPassword)

router.get("/logout",logoutHandler);


module.exports = router;