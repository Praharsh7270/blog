import bcryptjs from 'bcryptjs';
import e from 'express';
import User from '../model/user_model.js';


export const test = (req, res) => {
    res.json({message: 'Api is working'});
};


export const updateuser = async (req, res ) => {
    console.log(req.user); 
    if (req.user.id !== req.params.user_id) {
        return res.status(403).json({message: 'Forbidden'});
    }
    if(req.body.password) {
        if(req.body.password.length < 6) {
            return res.status(400).json({message: 'Password must be at least 6 characters long'});
        }
        req.body.password = await bcryptjs.hash(req.body.password, 10);
    } if(req.body.username) {
        if(req.body.username.length < 3  || req.body.username.length > 20) {
            return res.status(400).json({message: 'Username must be at least 3 characters long or shorter than 20 characters'});
        }
        if(req.body.username.includes(' ')) {
            return res.status(400).json({message: 'Username must not contain spaces'});
        }
        try{

            const updateUser = await User.findByIdAndUpdate(req.params.user_id, {
                $set:{
                    username: req.body.username,
                    email: req.body.email,
                    profilePhoto: req.body.profilePhoto,
                    password: req.body.password
                },
            }, 
            {new: true}
            );
            const {password, ...data} = await updateUser.toJSON();
            res.status(200).json(data);
           

        }
        catch(err) {
            console.log(err);
        }
    } 
}