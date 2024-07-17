import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductValidation } from './product.validate';
import { ProductController } from './product.controller';

const router = express.Router();

router.post(
  '/products',
  validateRequest(ProductValidation.CreateProductSchema),
  ProductController.createProduct,
);

router.get('/products/:id', ProductController.GetProductById);

router.get('/products', ProductController.GetAllProducts);

router.put(
  '/rooms/:id',
  validateRequest(ProductValidation.UpdateProductSchema),
  ProductController.UpdateProduct,
);

router.delete('/rooms/:id', ProductController.DeleteProduct);

export const ProductRoutes = router;
