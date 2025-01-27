import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadTaskWhereInputSchema } from './LeadTaskWhereInputSchema';

export const LeadTaskListRelationFilterSchema: z.ZodType<Prisma.LeadTaskListRelationFilter> = z.object({
  every: z.lazy(() => LeadTaskWhereInputSchema).optional(),
  some: z.lazy(() => LeadTaskWhereInputSchema).optional(),
  none: z.lazy(() => LeadTaskWhereInputSchema).optional()
}).strict();

export default LeadTaskListRelationFilterSchema;
