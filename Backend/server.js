import express from 'express';
import connectDb from './config/datab.js';
import todoRoute from './routes/todoRoute.js';
import cors from 'cors';
import userRoute from './routes/userRoutes.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';


dotenv.config()

const app = express()

let port = process.env.PORT

connectDb()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.use('/api/todo', todoRoute);
app.use('/api/user' ,userRoute)





app.listen(port, () => console.log('server started'))












//YAbsiROfEqK0q1MW