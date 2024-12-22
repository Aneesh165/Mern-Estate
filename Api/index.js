import express from 'express'
import  mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('Connected to Mongodb');
})
.catch((error)=>{
console.log(`Not Connected${error}`);

})

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${8000}`); 
})