import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserRouter from '../Api/Routes/UserRoute.js'
import AuthRouter from '../Api/Routes/AuthRoute.js'

dotenv.config();
const app = express();

app.use(express.json( ))

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


app.use('/api/user',UserRouter);
app.use('/api/auth',AuthRouter);

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message =err.message ||'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});