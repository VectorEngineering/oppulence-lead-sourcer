import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';

export const LeadRiskScalarWhereInputSchema: z.ZodType<Prisma.LeadRiskScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LeadRiskScalarWhereInputSchema),z.lazy(() => LeadRiskScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadRiskScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadRiskScalarWhereInputSchema),z.lazy(() => LeadRiskScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  category: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  impact: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  probability: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mitigation: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default LeadRiskScalarWhereInputSchema;
