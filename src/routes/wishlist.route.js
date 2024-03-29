import express from 'express';
import * as wishlistController from '../controllers/wishlist.controller.js';
import { userAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/:_id', userAuth, wishlistController.addToWishlist);

router.get('', userAuth, wishlistController.getAllWishListitems);

router.delete('/:_id', userAuth, wishlistController.removeFromWishlist);

export default router;
