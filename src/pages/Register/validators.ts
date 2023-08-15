import { z } from "zod";

export const schema = z
  .object({
    name: z.string().min(4, "must contain at least 4 characters."),
    email: z.string().email("Email obrigatório."),
    cpf: z
      .string()
      .regex(
        /^\d{3}\.\d{3}\.\d{3}-\d{2}$/i,
        "CPF inválido. Ex: 000.000.000-00"
      ),
    phone: z.number(),
    birth_date: z
      .string()
      .regex(
        /^\d{4}-\d{2}-\d{2}$/i,
        "Formato de data de nascimento inválido Ex: 0000-00-00 ."
      ),
    description: z.string(),
    password: z.string(),
    confirm_password: z.string().nonempty("Confirm password is required"),

    type_user: z.enum(["customer", "admin", "seller"]),
    address: z.object({
      cep: z.string().min(8, "CEP deve conter 8 caracteres"),
      state: z.string(),
      city: z.string(),
      road: z.string(),
      number: z.string(),
      complement: z.string(),
    }),
  })
  .refine(({ password, confirm_password }) => password === confirm_password, {
    message: "As senhas não correspondem",
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
