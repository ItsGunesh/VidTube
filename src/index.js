import {app} from "./app.js"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./db/index.js"
// import "dotenv/config"

dotenv.config()

const PORT = process.env.PORT || 7000

// console.log(process.env.PORT)

connectDB()
.then(()=>{
    app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
})
.catch((err)=>{
    console.log("MongoDB conncection error")
})