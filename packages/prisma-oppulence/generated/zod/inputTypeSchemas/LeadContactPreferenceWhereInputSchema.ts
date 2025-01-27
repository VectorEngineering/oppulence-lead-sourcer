import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadContactPreferenceWhereInputSchema: z.ZodType<Prisma.LeadContactPreferenceWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LeadContactPreferenceWhereInputSchema),z.lazy(() => LeadContactPreferenceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadContactPreferenceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadContactPreferenceWhereInputSchema),z.lazy(() => LeadContactPreferenceWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  method: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  preferredTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  preferredDays: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  timezone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  lead: z.union([ z.lazy(() => LeadRelationFilterSchema),z.lazy(() => LeadWhereInputSchema) ]).optional(),
}).strict();

export default LeadContactPreferenceWhereInputSchema;
