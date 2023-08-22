import z from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  cpf: z.string().length(11, { message: "An CPF must be exactly 11 numbers" }),
  phone: z.number(),
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
  number: z.number(),
  complement: z.string(),
});

export const addressUpdateSchema = addressSchema.omit({
  id: true,
});

export const userUpdateSchema = userSchema
  .omit({
    password: true,
    id: true,
  })
  .extend({
    address: addressUpdateSchema,
  })
  .partial();
