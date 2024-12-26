import express from 'express'
import { deleteUser, updateUser,  getUserListings, getUser } from '../Controllers/UserController.js';
import { verifyToken } from '../Utils/verifyUser.js';

const router = express.Router();

router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/listings/:id', verifyToken, getUserListings)
router.get('/:id', verifyToken, getUser)


export default router