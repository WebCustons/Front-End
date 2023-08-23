import z from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  cpf: z.string(),
  phone: z.string(),
  birth_date: z.date(),
  description: z.string(),
  password: z.string(),
  type_user: z.enum(["seller", "admin", "client"]),
});

export const addressSchema = z.object({
  id: z.number(),
  cep: z.string(),
  state: z.string(),
  city: z.string(),
  road: z.string(),
  number: z.string(),
  complement: z.string(),
});

export const addressUpdateSchema = addressSchema.omit({
  id: true,
});

export const userUpdateSchema = userSchema
  .omit({
    password: true,
    id: true,
    cpf: true,
  })
  .extend({
    address: addressUpdateSchema,
  })
  .partial();
