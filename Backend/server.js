import express from 'express'
import connectDb from './config/datab.js'

const app=express()

let port=3000

connectDb()

app.get('/',(req,res)=>(res.send('hai worked')
))

app.listen(port, ()=> console.log('server started'))












//YAbsiROfEqK0q1MW