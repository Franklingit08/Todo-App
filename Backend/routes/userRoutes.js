import express from 'express';
import { loginUser, logoutUser, registerUser } from '../controllers/userControllers.js';

const userRoute = express.Router()

userRoute.post('/auth', loginUser)

userRoute.post('/' , registerUser)

userrRoute.get('/logout', logoutUser)



export default userRoute;