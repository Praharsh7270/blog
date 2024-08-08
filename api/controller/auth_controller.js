import User from '../model/user_model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

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


export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(errorHandler(400, 'All fields are required'));
    }

    try {
        const ValidUser = await User.findOne({ email });
        if (!ValidUser) {
            return next(errorHandler(400, 'Invalid credentials'));
        }

        const validPassword = bcryptjs.compareSync(password, ValidUser.password);
        if (!validPassword) {
            return next(errorHandler(400, 'Invalid credentials'));
        }

        const token = jwt.sign(
            { id: ValidUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        const { password: pass, ...rest } = ValidUser._doc;
        res.status(200).cookie('access_token', token, {
            httpOnly: true,
        }).json(rest);
    } catch (error) {
        next(error);
    }
};