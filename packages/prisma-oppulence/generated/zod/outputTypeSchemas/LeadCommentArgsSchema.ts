import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCommentSelectSchema } from '../inputTypeSchemas/LeadCommentSelectSchema';
import { LeadCommentIncludeSchema } from '../inputTypeSchemas/LeadCommentIncludeSchema';

export const LeadCommentArgsSchema: z.ZodType<Prisma.LeadCommentDefaultArgs> = z.object({
  select: z.lazy(() => LeadCommentSelectSchema).optional(),
  include: z.lazy(() => LeadCommentIncludeSchema).optional(),
}).strict();

export default LeadCommentArgsSchema;
