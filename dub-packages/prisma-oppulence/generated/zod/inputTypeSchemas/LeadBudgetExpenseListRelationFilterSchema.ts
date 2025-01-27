import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetExpenseWhereInputSchema } from './LeadBudgetExpenseWhereInputSchema';

export const LeadBudgetExpenseListRelationFilterSchema: z.ZodType<Prisma.LeadBudgetExpenseListRelationFilter> = z.object({
  every: z.lazy(() => LeadBudgetExpenseWhereInputSchema).optional(),
  some: z.lazy(() => LeadBudgetExpenseWhereInputSchema).optional(),
  none: z.lazy(() => LeadBudgetExpenseWhereInputSchema).optional()
}).strict();

export default LeadBudgetExpenseListRelationFilterSchema;
