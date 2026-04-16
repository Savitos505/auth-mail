import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import cookieParser from 'cookie-parser';
import router from './src/router/router.js';

dotenv.config()
const app = express()
app.use(express.json())
app.use("/auth", router)
app.use(cookieParser())



async function start(){
    try{
        const PORT = process.env.PORT || 3000
        const db_URL = process.env.db_URL
        await mongoose.connect(db_URL)
        app.listen(3000,()=>{
            console.log(`server start on http://localhost:${PORT}`);
        })
    }catch(e){
        throw new Error(e)
    }
}
start()