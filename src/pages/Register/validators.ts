import { z } from "zod";

export const schema = z
  .object({
    name: z.string().min(4, "must contain at least 4 characters."),
    email: z.string().email("Email required."),
    cpf: z
      .string()
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/i, "Invalid CPF format."),
    phone: z.string(),
    birth_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/i, "Invalid birth date format."),
    description: z.string(),
    password: z.string(),
    confirm_password: z.string().nonempty("Confirm password is required"),

    type_user: z.enum(["customer", "admin", "seller"]),
    address: z.object({
      cep: z.string().min(8, "CEP must have at least 8 characters."),
      state: z.string(),
      city: z.string(),
      road: z.string(),
      number: z.string(),
      complement: z.string(),
    }),
  })
  .refine(({ password, confirm_password }) => password === confirm_password, {
    message: "Password doesn't match",
    path: ["confirm_password"],
  })
  .transform((data) => ({
    ...data,
    phone: Number(data.phone),
    address: {
      ...data.address,
      number: Number(data.address.number),
    },
  }));

export type ClientData = z.infer<typeof schema>;
