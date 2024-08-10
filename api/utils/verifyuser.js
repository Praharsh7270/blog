import { errorHandler } from './error.js';
import jwt from 'jsonwebtoken';

const verifyUser = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(token);
    if (!token) {
        return next(errorHandler(401, 'Unauthorized'));
    }

    jwt.verify(token, "secret", (err, user) => {
        if (err) {
            console.log('Token verification error:', err);
            return next(errorHandler(403, 'Forbidden'));
        }
        console.log('Decoded user:', user);  // Log the decoded user object
        req.user = user;
        next();
    });    
};

export default verifyUser;
