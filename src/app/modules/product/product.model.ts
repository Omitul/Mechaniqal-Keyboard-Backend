import { model, Schema } from 'mongoose';
import { TProduct } from './product.interface';

const TProductSchema = new Schema({
  price: { type: String, required: true },
  description: { type: String, required: true },
  available_quantity: { type: String, required: true },
  rating: { type: String, required: true },
  image: { type: String, required: true },
});

const TProductModel = model<TProduct>('TProduct', TProductSchema);

export default TProductModel;
