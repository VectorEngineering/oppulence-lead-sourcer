import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadDecisionMakerWhereInputSchema } from './LeadDecisionMakerWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadDecisionMakerWhereUniqueInputSchema: z.ZodType<Prisma.LeadDecisionMakerWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => LeadDecisionMakerWhereInputSchema),z.lazy(() => LeadDecisionMakerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadDecisionMakerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadDecisionMakerWhereInputSchema),z.lazy(() => LeadDecisionMakerWhereInputSchema).array() ]).optional(),
  leadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  phone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  influence: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  lead: z.union([ z.lazy(() => LeadRelationFilterSchema),z.lazy(() => LeadWhereInputSchema) ]).optional(),
}).strict());

export default LeadDecisionMakerWhereUniqueInputSchema;
