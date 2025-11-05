import { User } from '../models/user-models.js';
import bcrypt from 'bcryptjs';

//Registration
const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).send("User already exists");
        }

        const userCreated = await User.create({
            username,
            email,
            phone,
            password
        });
        console.log("inside Try 1:", userCreated)
        res.status(200).send({
            message: userCreated,
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        });

        console.log("inside Try 2")
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }


}

const login = async (req, res) => {
try {
    
    const { email, password } = req.body;
    const userExists = await User.findOne({ email});

    if(!userExists){
        return res.status(400).json({
            message:"Invalid Credentials",

        });
    }
    // Compare Password
   // const isValidPassword = await bcrypt.compare(password, userExists.password);

   const isValidPassword = await userExists.comparePassword(password);
   
    if(isValidPassword){
        res.status(200).json({
            message: "Login Success",
            token: await userExists.generateToken(),
            userId: userExists._id.toString()
        });
    } else {
        res.status(401).json({
            message: "Invalid Credentials 401",
        });
    
    }

} catch (error) {
    
}
}


export { register, login }