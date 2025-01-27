import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCommentWhereInputSchema } from './LeadCommentWhereInputSchema';

export const LeadCommentListRelationFilterSchema: z.ZodType<Prisma.LeadCommentListRelationFilter> = z.object({
  every: z.lazy(() => LeadCommentWhereInputSchema).optional(),
  some: z.lazy(() => LeadCommentWhereInputSchema).optional(),
  none: z.lazy(() => LeadCommentWhereInputSchema).optional()
}).strict();

export default LeadCommentListRelationFilterSchema;
