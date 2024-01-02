import express from 'express';
const router = express.Router();

import userRoute from './user.route.js';
import bookRoute from './book.route.js';
import cartRoute from './cart.route.js';
import wishlistRoute from './wishlist.route.js';
import orderRoute from './order.route.js';
import addressRoute from './address.route.js';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/books', bookRoute);
  router.use('/cart', cartRoute);
  router.use('/wishlist', wishlistRoute);
  router.use('/order',orderRoute);
  router.use('/address',addressRoute);

  return router;
};

export default routes;
