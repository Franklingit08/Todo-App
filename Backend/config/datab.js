import mongoose from "mongoose";

const connectDb= async()=>{
    try{
        const connected = await mongoose.connect('mongodb+srv://franklingeoj95:YAbsiROfEqK0q1MW@cluster-todo.r0qmgsr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-ToDo')
    }catch (error) {
        console.log(error)
    }
}

export default connectDb