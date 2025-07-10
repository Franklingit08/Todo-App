import Users from "../model/userModel.js";

const registerUser= async(req,res)=>{
    try {
        const{name ,email ,password}=req.body 

        const userExists = await Users.findOne({email : email})

        if (userExists) { 
            
        }

    } catch (error) {
    res.status(500).json(error);
    }

}

const loginUser= async(req,res)=>{
    try {
        
    } catch (error) {
    res.status(500).json(error);
    }


}


const logoutUser= async(req,res)=>{
    try {
        
    } catch (error) {
    res.status(500).json(error);
    }


}

export{
    registerUser, loginUser ,logoutUser
};