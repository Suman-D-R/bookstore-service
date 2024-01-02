import express from 'express';
import * as cartController from '../controllers/cart.controller.js';
import { userAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/:_id', userAuth, cartController.addToCart);

router.get('/', userAuth, cartController.getAllCartitems);

router.delete('/:_id', userAuth, cartController.removeFromCart);

router.put('/:_id', userAuth, cartController.isPurchase);

export default router;
