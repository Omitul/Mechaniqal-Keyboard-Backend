import { TProduct } from './product.interface';
import TProductModel from './product.model';

const CreateProductIntoDb = async (payload: TProduct) => {
  const result = await TProductModel.create(payload);
  return result;
};

// const GetProductFromDbById = async (id: string) => {
//   const result = await TProductModel.findById(id);
//   return result;
// };

const GetProductFromDb = async (searchTerm: string, sortOption: string) => {
  searchTerm = searchTerm.trim().replace(/"/g, '');
  sortOption = sortOption.trim().replace(/"/g, '');

  console.log('Sort Option:', sortOption);
  console.log('Search Term:', searchTerm);

  const query: any = {
    $or: [
      { name: { $regex: searchTerm, $options: 'i' } },
      { brand: { $regex: searchTerm, $options: 'i' } },
    ],
  };

  console.log('Query:', query);

  let sortDirection: any = {};

  if (sortOption === 'priceAscending') sortDirection = 1;
  else if (sortOption === 'priceDescending') sortDirection = -1;
  else sortDirection = 0;

  console.log('Sort Direction:', sortDirection);

  try {
    let result: any = {};

    // Apply sorting only if sortDirection is valid
    if (sortDirection !== 0) {
      result = await TProductModel.aggregate([
        { $match: query },
        { $addFields: { priceNumber: { $toDouble: '$price' } } },
        { $sort: { priceNumber: sortDirection } },
        { $project: { priceNumber: 0 } },
      ]).exec();
    } else {
      result = await TProductModel.aggregate([{ $match: query }]).exec();
    }

    console.log('Aggregation Result:', result);
    return result;
  } catch (error) {
    console.error('Error in aggregation:', error);
    throw new Error('Error fetching products');
  }
};

const UpdateProductIntoDb = async (id: string, payload: Partial<TProduct>) => {
  const result = await TProductModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });
  console.log('Update result:', result);
  return result;
};

const DeleteProductFromDb = async (ProductId: string) => {
  const product = await TProductModel.deleteOne({ _id: ProductId });
  return product;
};

export const ProductServices = {
  CreateProductIntoDb,
  GetProductFromDb,
  UpdateProductIntoDb,
  DeleteProductFromDb,
};
