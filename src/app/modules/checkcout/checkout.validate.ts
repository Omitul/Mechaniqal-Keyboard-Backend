import { z } from 'zod';

export const CreateCheckoutValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email('Invalid Email Format'),
    address: z.string(),
    payment: z.enum([
      'Bank Transfer',
      'Credit Card',
      'Paypal',
      'Bkash',
      'Nagad',
    ]),
  }),
});

export const CheckoutValidation = {
  CreateCheckoutValidationSchema,
};
