import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { ProductServices } from './product.service';

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.CreateProductIntoDb(req.body);

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
  const result = await ProductServices.GetProductFromDbById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product retrieved successfully',
    data: result,
  });
});

const UpdateProduct = catchAsync(async (req, res) => {
  const id = req.params.id.trim();
  const result = await ProductServices.UpdateProductIntoDb(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product updated successfully',
    data: result,
  });
});

const DeleteProduct = catchAsync(async (req, res) => {
  const id = req.params.id.trim();
  const result = await ProductServices.DeleteProductFromDb(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product deleted successfully',
    data: result,
  });
});

export const ProductController = {
  createProduct,
  GetProductById,
  GetAllProducts,
  DeleteProduct,
  UpdateProduct,
};
