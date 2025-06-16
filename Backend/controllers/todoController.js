import Todos from "../model/todoModel.js";

const createTodo = async (req, res) => {


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

};

const getTodos = async (req, res) => {
    try {
        const todos = await Todos.find()
        res.json(todos)
    } catch (error) {
        res.status(500).json(error)
    }
};

const deleteTodo = async (req, res) => {
    try {
        const deleted = await Todos.findByIdAndDelete(req.params.id)

        if (!deleted) {
            return res.status(404).json({ message: 'Todo not found' })
        }

        res.json({ message: 'Todo deleted successfully' })

    } catch (error) {
        res.status(500).json(error)
    }
};

const getTodoById = async (req, res) => {
    try {
        const{id}= req.query

        const todo=await Todos.findById(id)

        if(!todo){
            return res.status(404).json({message:'todo not found'})
        }
        res.json(todo)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateTodo = async (req, res) => {
    try {
        const { title, description, isCompleted, id } = req.body
        const updateTodo = await Todos.findByIdAndUpdateb(id, { title, description, isCompleted })

        if (!updateTodo) {
            return res.status(404).json({ message: 'Todo not found' })
        }

        res.json(updateTodo)

    } catch (error) {
        res.status(500).json(error)
    }
};

export {
    createTodo,
    getTodos,
    deleteTodo,
    updateTodo,
    getTodoById 
}