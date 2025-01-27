import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadCommentCreateWithoutLeadInputSchema: z.ZodType<Prisma.LeadCommentCreateWithoutLeadInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  type: z.string().optional().nullable(),
  visibility: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdBy: z.string().optional().nullable()
}).strict();

export default LeadCommentCreateWithoutLeadInputSchema;
