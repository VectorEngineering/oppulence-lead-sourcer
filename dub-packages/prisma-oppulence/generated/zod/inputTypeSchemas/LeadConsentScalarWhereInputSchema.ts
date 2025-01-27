import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const LeadConsentScalarWhereInputSchema: z.ZodType<Prisma.LeadConsentScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LeadConsentScalarWhereInputSchema),z.lazy(() => LeadConsentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadConsentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadConsentScalarWhereInputSchema),z.lazy(() => LeadConsentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  source: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ipAddress: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  timestamp: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  expiryDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  document: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default LeadConsentScalarWhereInputSchema;
