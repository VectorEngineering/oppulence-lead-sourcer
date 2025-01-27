import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetWhereInputSchema } from './LeadBudgetWhereInputSchema';

export const LeadBudgetRelationFilterSchema: z.ZodType<Prisma.LeadBudgetRelationFilter> = z.object({
  is: z.lazy(() => LeadBudgetWhereInputSchema).optional(),
  isNot: z.lazy(() => LeadBudgetWhereInputSchema).optional()
}).strict();

export default LeadBudgetRelationFilterSchema;
