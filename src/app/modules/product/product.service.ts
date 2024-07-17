import { TProduct } from './product.interface';
import TProductModel from './product.model';

const CreateProductIntoDb = async (payload: TProduct) => {
  const result = await TProductModel.create(payload);
  return result;
};

const GetProductFromDbById = async (id: string) => {
  const result = await TProductModel.findById(id);
  return result;
};

const GetProductFromDb = async () => {
  const result = await TProductModel.find();
  return result;
};

const UpdateProductIntoDb = async (id: string, payload: Partial<TProduct>) => {
  const result = await TProductModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const DeleteProductFromDb = async (ProductId: string) => {
  const product = await TProductModel.deleteOne({ _id: ProductId });
  return product;
};

export const ProductServices = {
  CreateProductIntoDb,
  GetProductFromDbById,
  GetProductFromDb,
  UpdateProductIntoDb,
  DeleteProductFromDb,
};
