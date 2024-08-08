import { z } from 'zod';

export const CreateProductValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    price: z.number(),
    brand: z.string(),
    description: z.string(),
    available_quantity: z.number(),
    rating: z.number(),
    image: z.string(),
  }),
});

export const UpdateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    price: z.number().optional(),
    description: z.string().optional(),
    brand: z.string().optional(),
    available_quantity: z.number().optional(),
    rating: z.number().optional(),
    image: z.string().optional(),
  }),
});

export const ProductValidation = {
  CreateProductValidationSchema,
  UpdateProductValidationSchema,
};
