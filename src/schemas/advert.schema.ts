import z from "zod";
import { userSchema } from "./user.schema";

export const imageGallerySchema = z.object({
  id: z.number(),
  image: z.string(),
});

export const advertSchema = z.object({
  id: z.number(),
  brand: z.string(),
  model: z.string(),
  year: z.number(),
  fuel: z.string(),
  mileage: z.number(),
  color: z.string(),
  table_fipe: z.boolean(),
  price: z.number(),
  description: z.string(),
  cover_image: z.string(),
  published: z.boolean().optional(),
  image_gallery: z.array(imageGallerySchema),
  user_advert: userSchema,
});

export type TAdvert = z.infer<typeof advertSchema>;
