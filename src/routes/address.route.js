import express from 'express';
import * as addressController from '../controllers/address.controller.js';
import { userAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/',userAuth,addressController.getAddress);

router.post('/',userAuth, addressController.addAddress);

export default router;
