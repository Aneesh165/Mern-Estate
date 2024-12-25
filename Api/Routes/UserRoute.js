import express from 'express'
import { deleteUser, updateUser } from '../Controllers/UserController.js';
import { verifyToken } from '../Utils/verifyUser.js';

const router = express.Router();

router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)

export default router