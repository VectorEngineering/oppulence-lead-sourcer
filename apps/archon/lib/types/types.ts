import { z } from "zod";

const PageDetailsSchema = z.object({
  name: z.string(),
  title: z.string(),
  description: z.string(),
});

export type PageDetails = z.infer<typeof PageDetailsSchema>;
