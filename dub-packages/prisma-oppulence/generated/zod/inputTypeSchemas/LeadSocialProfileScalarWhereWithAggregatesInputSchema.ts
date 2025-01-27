import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumLeadSocialPlatformWithAggregatesFilterSchema } from './EnumLeadSocialPlatformWithAggregatesFilterSchema';
import { LeadSocialPlatformSchema } from './LeadSocialPlatformSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';

export const LeadSocialProfileScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadSocialProfileScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LeadSocialProfileScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadSocialProfileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadSocialProfileScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadSocialProfileScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadSocialProfileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  platform: z.union([ z.lazy(() => EnumLeadSocialPlatformWithAggregatesFilterSchema),z.lazy(() => LeadSocialPlatformSchema) ]).optional(),
  profileUrl: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  lastSynced: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default LeadSocialProfileScalarWhereWithAggregatesInputSchema;
