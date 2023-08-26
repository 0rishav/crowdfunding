const express = require("express");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/authRoute");
const { notFound, errorHandler } = require("./middlewares/errorHandler");


const app = express();

const PORT = process.env.PORT;

dbConnect();

app.use(morgan("dev"));
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())

app.use("/api/v1/user",authRoute)



app.use(notFound);
app.use(errorHandler);

app.listen(PORT,() => {
    console.log(`Server is Running On Port:${process.env.PORT}`);
});

