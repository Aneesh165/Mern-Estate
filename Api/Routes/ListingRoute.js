import express from 'express';
import { createListing } from '../Controllers/ListingController.js';
import { verifyToken } from '../Utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createListing);

export default router;