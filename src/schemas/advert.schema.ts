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
  year: z.number().or(z.string()),
  fuel: z.string(),
  mileage: z.number().or(z.string()),
  color: z.string(),
  table_fipe: z.boolean(),
  price: z.number().or(z.string()),
  description: z.string(),
  cover_image: z.string(),
  published: z.boolean().optional(),
  image_gallery: z.array(imageGallerySchema),
  user: userSchema,
});

export const advertSchemaValidator = advertSchema
  .omit({
    id: true,
    user: true,
    table_fipe: true,
    fuel: true,
    year: true,
  })
  .extend({
    image_gallery: z.array(z.string()).optional(),
  });

export const createAdvertSchemaValidator = advertSchema
  .omit({
    id: true,
    user: true,
  })
  .extend({
    image_gallery: z.array(z.string()).optional(),
  });

export type TAdvert = z.infer<typeof advertSchema>;
