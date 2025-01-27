import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const LeadBudgetRevisionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadBudgetRevisionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LeadBudgetRevisionScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadBudgetRevisionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadBudgetRevisionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadBudgetRevisionScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadBudgetRevisionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  budgetId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  previousAmount: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  newAmount: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  reason: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  approvedBy: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default LeadBudgetRevisionScalarWhereWithAggregatesInputSchema;
