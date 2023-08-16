import z from "zod";
import { advertSchema } from "../schemas/advert.schema";

export type TAdvert = z.infer<typeof advertSchema>;

export type TPagination = {
    prevPage: string | null,
    nextPage: string | null,
    totalPages: number,
    data: TAdvert[]
}