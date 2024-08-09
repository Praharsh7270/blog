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


export const googleAuth = async (req, res, next) => {

    const {name,email,googlePhotoUrl} = req.body;
    try{
        const user = await User.findOne({email});
        if(user){
            const token = jwt.sign(
                { id: user._id },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );
            const { password: pass, ...rest } = user._doc;
            res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json(rest);
        }
        else{
            const genratedpassword = Math.random().toString(36).slice(-8);
            const hash = bcryptjs.hashSync(genratedpassword, 10);
            const newuser = new User({
                username: name.toLowerCase().split(' ').join('')+Math.random().toString(36).slice(-5),
                email,
                password: hash,
                profilePhoto:googlePhotoUrl
            });

            await newuser.save();
            const token = jwt.sign(
                { id: newuser._id },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );
            const { password: pass, ...rest } = newuser._doc;
            res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json(rest);
        }
    }
    catch(err){
        next(err);
    }
}