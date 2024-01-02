import express from 'express';
import * as bookController from '../controllers/book.controller.js';
import { userAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('', userAuth, bookController.getAllBooks);

router.get('/sortbyprice/:sortBy', userAuth, bookController.getSortByPrice);

router.get('/sortbysearch', userAuth, bookController.getSearchBooks);



export default router;
