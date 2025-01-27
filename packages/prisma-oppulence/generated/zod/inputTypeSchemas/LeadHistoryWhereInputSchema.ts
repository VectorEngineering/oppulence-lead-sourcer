import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadHistoryWhereInputSchema: z.ZodType<Prisma.LeadHistoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LeadHistoryWhereInputSchema),z.lazy(() => LeadHistoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadHistoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadHistoryWhereInputSchema),z.lazy(() => LeadHistoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  action: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  changes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  metadata: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  changeType: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  source: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ipAddress: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userAgent: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  lead: z.union([ z.lazy(() => LeadRelationFilterSchema),z.lazy(() => LeadWhereInputSchema) ]).optional(),
}).strict();

export default LeadHistoryWhereInputSchema;
