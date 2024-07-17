import { z } from 'zod';

export const CreateProductSchema = z.object({
  body: z.object({
    name: z.string(),
    price: z.string(),
    description: z.string(),
    available_quantity: z.string(),
    rating: z.string(),
    image: z.string(),
  }),
});

export const UpdateProductSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    price: z.string().optional(),
    description: z.string().optional(),
    available_quantity: z.string().optional(),
    rating: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const ProductValidation = {
  CreateProductSchema,
  UpdateProductSchema,
};
