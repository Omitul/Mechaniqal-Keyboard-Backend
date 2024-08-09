import TProductModel from '../product/product.model';
import { Tcheckout } from './checkout.interface';
import TCheckoutModel from './checkout.model';

const CreateOrderIntoDb = async (payload: Tcheckout) => {
  try {
    const productIds = payload.productIdAndQuantity.map(
      (item) => item.productId,
    );
    const products = await TProductModel.find({
      _id: { $in: productIds },
    }).exec();

    // Check if requested quantities are available
    for (const item of payload.productIdAndQuantity) {
      const product = products.find((p) => p._id.toString() === item.productId);

      if (!product) {
        throw new Error(`Product ${item.productId} not found`);
      }
      if (item.quantity > product.available_quantity) {
        throw new Error('Not Enough Stock');
      }
    }

    // Create the order
    const order = await TCheckoutModel.create(payload);

    // Update product quantities
    await Promise.all(
      payload.productIdAndQuantity.map((item) =>
        TProductModel.updateOne(
          { _id: item.productId },
          { $inc: { available_quantity: -item.quantity } },
        ).exec(),
      ),
    );

    return order;
  } catch (error: any) {
    console.error('Order creation failed:', error.message);
    throw new Error(error.message);
  }
};

export const CheckoutServices = {
  CreateOrderIntoDb,
};
