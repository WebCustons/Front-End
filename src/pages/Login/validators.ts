import { z } from "zod";

export const schema = z.object({
  email: z.string().email("mandatory filling in email."),
  password: z.string().nonempty("Password required."),
});

export type LoginData = z.infer<typeof schema>;
