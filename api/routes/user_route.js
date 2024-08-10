import express from 'express';
import { test, updateuser } from '../controller/user_controller.js';
import verifyUser from '../utils/verifyuser.js';

const router = express.Router();

router.get('/test', test);
router.put('/update/:user_id', verifyUser, updateuser);

export default router;
