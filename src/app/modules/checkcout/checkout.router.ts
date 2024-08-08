import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CheckoutValidation } from './checkout.validate';
import { CheckoutController } from './checkout.controller';

const router = express.Router();

router.post(
  '/checkout',
  validateRequest(CheckoutValidation.CreateCheckoutValidationSchema),
  CheckoutController.CreateOrder,
);

export const CheckOutRoutes = router;
