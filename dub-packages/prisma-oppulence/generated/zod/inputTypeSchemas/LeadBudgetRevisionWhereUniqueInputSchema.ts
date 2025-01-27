import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetRevisionWhereInputSchema } from './LeadBudgetRevisionWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LeadBudgetRelationFilterSchema } from './LeadBudgetRelationFilterSchema';
import { LeadBudgetWhereInputSchema } from './LeadBudgetWhereInputSchema';

export const LeadBudgetRevisionWhereUniqueInputSchema: z.ZodType<Prisma.LeadBudgetRevisionWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => LeadBudgetRevisionWhereInputSchema),z.lazy(() => LeadBudgetRevisionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadBudgetRevisionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadBudgetRevisionWhereInputSchema),z.lazy(() => LeadBudgetRevisionWhereInputSchema).array() ]).optional(),
  budgetId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  previousAmount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  newAmount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  reason: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  approvedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  budget: z.union([ z.lazy(() => LeadBudgetRelationFilterSchema),z.lazy(() => LeadBudgetWhereInputSchema) ]).optional(),
}).strict());

export default LeadBudgetRevisionWhereUniqueInputSchema;
