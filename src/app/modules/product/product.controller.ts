import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { ProductServices } from './product.service';

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.CreateRoomIntoDb(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Product Added succesfully',
    data: result,
  });
});

const GetAllProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.GetProductFromDb();

  if (result.length == 0) {
    res.status(404).json({
      success: false,
      statusCode: 404,
      message: 'No Data Found',
      data: result,
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products retrieved successfully',
    data: result,
  });
});

const GetProductById = catchAsync(async (req, res) => {
  const id = req.params.id.trim();
  const result = await ProductServices.GetRoomFromDbById(id);

  if (result?.isDeleted == true) {
    res.status(404).json({
      success: false,
      statusCode: 404,
      message: 'No Data Found',
      data: [],
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product retrieved successfully',
    data: result,
  });
});

const UpdateProduct = catchAsync(async (req, res) => {
  const id = req.params.id.trim();
  const result = await RoomServices.UpdateRoomIntoDb(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product updated successfully',
    data: result,
  });
});

const DeleteRoom = catchAsync(async (req, res) => {
  const id = req.params.id.trim();
  const result = await ProductServices.DeleteRoomFromDb(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product deleted successfully',
    data: result,
  });
});
