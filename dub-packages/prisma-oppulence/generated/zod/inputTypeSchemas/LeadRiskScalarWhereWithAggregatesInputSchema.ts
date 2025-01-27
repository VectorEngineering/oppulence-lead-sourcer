import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const LeadRiskScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadRiskScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LeadRiskScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadRiskScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadRiskScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadRiskScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadRiskScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  category: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  impact: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  probability: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  mitigation: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default LeadRiskScalarWhereWithAggregatesInputSchema;
