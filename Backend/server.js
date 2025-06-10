import express from 'express'
import connectDb from './config/datab.js'
import Todos from './model/todoModel.js'

const app = express()

let port = 3000

connectDb()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.post('/create-todo', async (req, res) => {


    try {

        let { title, description } = req.body


        let newTodo = await Todos.create({
            title,
            description
        })

        res.json(newTodo)

    } catch (error) {
        console.log(error)
    }



})



app.listen(port, () => console.log('server started'))












//YAbsiROfEqK0q1MW