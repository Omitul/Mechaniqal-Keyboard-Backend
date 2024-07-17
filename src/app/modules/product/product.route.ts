import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductValidation } from './product.validate';

const router = express.Router();

router.post(
  '/products',
  validateRequest(ProductValidation.CreateProductSchema),
  RoomController.createRoom,
);

router.get('/products/:id', RoomController.GetRoomById);

router.get('/rooms', RoomController.GetAllRoom);

router.put(
  '/rooms/:id',
  validateRequest(ProductValidation.UpdateProductSchema),
  RoomController.UpdateRoom,
);

router.delete('/rooms/:id', RoomController.DeleteRoom);

x`export const RoomRoutes = router;
