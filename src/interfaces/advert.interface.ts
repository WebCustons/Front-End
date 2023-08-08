import z from "zod";
import { advertSchema } from "../schemas/advert.schema";

export type TAdvert = z.infer<typeof advertSchema>;
