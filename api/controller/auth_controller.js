import User from '../model/user_model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res,next) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password){
        next(errorHandler(400, 'All fields are required'));
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
        next(error); 
    }
    
};
