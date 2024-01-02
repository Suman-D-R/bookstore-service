import express from 'express';
import * as userController from '../controllers/user.controller.js';
import { newUserValidator } from '../validators/user.validator.js';
import { userAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

//route to create a new user
router.post('', newUserValidator, userController.userRegistration);

//route to login user
router.post('/login', userController.loginUser);

router.get('',userAuth, userController.getUserdetails)

export default router;
