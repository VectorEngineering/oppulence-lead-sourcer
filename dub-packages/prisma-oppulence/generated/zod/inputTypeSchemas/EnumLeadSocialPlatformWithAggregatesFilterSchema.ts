import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSocialPlatformSchema } from './LeadSocialPlatformSchema';
import { NestedEnumLeadSocialPlatformWithAggregatesFilterSchema } from './NestedEnumLeadSocialPlatformWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumLeadSocialPlatformFilterSchema } from './NestedEnumLeadSocialPlatformFilterSchema';

export const EnumLeadSocialPlatformWithAggregatesFilterSchema: z.ZodType<Prisma.EnumLeadSocialPlatformWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LeadSocialPlatformSchema).optional(),
  in: z.lazy(() => LeadSocialPlatformSchema).array().optional(),
  notIn: z.lazy(() => LeadSocialPlatformSchema).array().optional(),
  not: z.union([ z.lazy(() => LeadSocialPlatformSchema),z.lazy(() => NestedEnumLeadSocialPlatformWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLeadSocialPlatformFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLeadSocialPlatformFilterSchema).optional()
}).strict();

export default EnumLeadSocialPlatformWithAggregatesFilterSchema;
