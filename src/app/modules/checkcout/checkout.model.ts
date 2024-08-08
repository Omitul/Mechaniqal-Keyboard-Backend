import mongoose, { model } from 'mongoose';
import { Tcheckout } from './checkout.interface';

const TCheckoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  payment: {
    type: String,
    enum: ['Bank Transfer', 'Credit Card', 'Paypal', 'Bkash', 'Nagad'],
    required: true,
  },
});

const TCheckoutModel = model<Tcheckout>('TCheckout', TCheckoutSchema);

export default TCheckoutModel;
