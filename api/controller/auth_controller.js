import User from '../model/user_model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password){
        return res.status(400).json({error: "All fields are required"});
    }

    const hash = bcryptjs.hashSync(password, 10);

    const newuser = new User({
        username,
        email,
        password: hash
    });

    try {
        await newuser.save();
        res.json({message: 'Signup success'});
    } catch (error) {
        console.error('Signup error:', error); 
        res.status(500).json({error: error.message});  
    }
    
};
