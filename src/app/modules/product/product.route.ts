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

router.get('/product/:id', ProductController.GetProductById);

router.get('/products', ProductController.GetAllProducts);

router.put(
  '/product/:id',
  validateRequest(ProductValidation.UpdateProductSchema),
  ProductController.UpdateProduct,
);

router.delete('/product/:id', ProductController.DeleteProduct);

export const ProductRoutes = router;
