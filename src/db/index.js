import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB = async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MONGODB connected !`)
    } catch (error) {
        console.log("MongoDB connetion error" , error)
        process.exit()
    }
}

export default connectDB