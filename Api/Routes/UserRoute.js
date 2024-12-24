import express from 'express'
import { updateUser } from '../Controllers/UserController.js';
import { verifyToken } from '../Utils/verifyUser.js';

const router = express.Router();

router.post('/update/:id', verifyToken, updateUser)

export default router