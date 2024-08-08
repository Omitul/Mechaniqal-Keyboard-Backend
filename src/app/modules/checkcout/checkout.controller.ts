import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CheckoutServices } from './checkout.service';

const CreateOrder = catchAsync(async (req, res) => {
  const result = await CheckoutServices.CreateOrderIntoDb(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Order Placed succesfully',
    data: result,
  });
});

export const CheckoutController = {
  CreateOrder,
};
