import express from 'express';
import * as orderController from '../controllers/order.controller.js';
import { userAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/',userAuth , orderController.addToOrder);

router.get('/',userAuth, orderController.getOrders);

export default router;
