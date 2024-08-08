import { Tcheckout } from './checkout.interface';
import TCheckoutModel from './checkout.model';

const CreateOrderIntoDb = async (payload: Tcheckout) => {
  const result = await TCheckoutModel.create(payload);
  return result;
};

export const CheckoutServices = {
  CreateOrderIntoDb,
};
