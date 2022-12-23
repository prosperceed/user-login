const mongoose = require("mongoose")
require("dotenv").config()

async function connect(){
    mongoose
     connect(
        process.env.DB_URL,
        {

            newUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
        )
        .then(()=>{
            console.log("successfull connected to mongoose")
        })
        .catch((error)=>{
            console.log("failed to connect to mongoose")
            console.error(error)
        })
}

module.exports = connect;