import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const LeadRequirementScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadRequirementScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LeadRequirementScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadRequirementScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadRequirementScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadRequirementScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadRequirementScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  category: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  priority: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default LeadRequirementScalarWhereWithAggregatesInputSchema;
