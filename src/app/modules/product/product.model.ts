import { model, Schema } from 'mongoose';
import { TProduct } from './product.interface';

const TProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  available_quantity: { type: Number, required: true },
  rating: { type: Number, required: true },
  image: { type: String, required: true },
});

const TProductModel = model<TProduct>('TProduct', TProductSchema);

export default TProductModel;
