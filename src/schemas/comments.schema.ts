import { z } from "zod";

export const CommentsSchema = z.object({
  id: z.string(),
  comment: z.string(),
  user: z.number(),
  advert: z.number(),
  creted_at: z.string(),
});

export const CommentSchemaRequest = CommentsSchema.omit({
  id: true,
  advert: true,
  user: true,
  creted_at: true,
});

export const AllCommentsSchema = z.array(CommentsSchema);
