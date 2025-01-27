import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadCompetitorWhereInputSchema: z.ZodType<Prisma.LeadCompetitorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LeadCompetitorWhereInputSchema),z.lazy(() => LeadCompetitorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadCompetitorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadCompetitorWhereInputSchema),z.lazy(() => LeadCompetitorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  strengths: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  weaknesses: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pricing: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  differentiator: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lead: z.union([ z.lazy(() => LeadRelationFilterSchema),z.lazy(() => LeadWhereInputSchema) ]).optional(),
}).strict();

export default LeadCompetitorWhereInputSchema;
