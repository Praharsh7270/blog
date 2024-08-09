
import express from 'express';
import { signup } from '../controller/auth_controller.js';
const router = express.Router();
import { signin } from '../controller/auth_controller.js';
import { googleAuth } from '../controller/auth_controller.js';

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', googleAuth);

export default router;