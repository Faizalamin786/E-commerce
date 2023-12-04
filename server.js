import express from 'express';
import colors from "colors"
import dotenv from "dotenv";
import morgan from 'morgan';
import connectDB from "./config/db.js"
import authRoute from "./routes/authRoute.js"
import cors from "cors"
dotenv.config()
//database config
connectDB();

const app = express()
//middileleware;
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
//routes
app.use("/api/v1/auth",authRoute)

//rest api
app.get('/', (req,res)=>{
    res.send('<h1>Welcome to e-commerce</h1>')
})

const PORT  = process.env.PORT || 5001

app.listen(PORT, ()=>{
    console.log(`server running ${process.env.DEV_MODE} on port ${PORT}`.bgCyan.green)
})