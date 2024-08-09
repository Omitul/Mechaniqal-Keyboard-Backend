import mongoose, { model } from 'mongoose';
import { Tcheckout } from './checkout.interface';

const ProductQuantitySchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TProduct',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const TCheckoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  payment: {
    type: String,
    enum: ['Bank Transfer', 'Credit Card', 'Paypal', 'Bkash', 'Nagad'],
    required: true,
  },
  productIdAndQuantity: [ProductQuantitySchema],
});

const TCheckoutModel = model<Tcheckout>('TCheckout', TCheckoutSchema);

export default TCheckoutModel;
