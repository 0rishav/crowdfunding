const mongoose = require("mongoose")

const dbConnect = () => {
    try {
        
        const conn = mongoose.connect(process.env.MONGO_URL)
       
        console.log("DataBase Connected Successfully")
    } catch (error) {
        console.log("DataBase Error");
    }
}

module.exports = dbConnect;