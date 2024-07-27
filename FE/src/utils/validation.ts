import * as z from "zod";

export const ProductSchema = z.object({
  name: z.string().min(6, "Name must be at least 6 characters long"),
  price: z.number().min(0, "Price must be a positive number"),
  image: z.string().optional(), // Sửa lại validator cho image
  description: z.string().optional()
});

export const AuthUser = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long")
});
