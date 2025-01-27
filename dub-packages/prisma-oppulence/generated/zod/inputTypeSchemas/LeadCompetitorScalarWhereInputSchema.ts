import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const LeadCompetitorScalarWhereInputSchema: z.ZodType<Prisma.LeadCompetitorScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LeadCompetitorScalarWhereInputSchema),z.lazy(() => LeadCompetitorScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadCompetitorScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadCompetitorScalarWhereInputSchema),z.lazy(() => LeadCompetitorScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  strengths: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  weaknesses: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pricing: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  differentiator: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default LeadCompetitorScalarWhereInputSchema;
