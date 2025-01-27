import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSocialPlatformSchema } from './LeadSocialPlatformSchema';

export const NestedEnumLeadSocialPlatformFilterSchema: z.ZodType<Prisma.NestedEnumLeadSocialPlatformFilter> = z.object({
  equals: z.lazy(() => LeadSocialPlatformSchema).optional(),
  in: z.lazy(() => LeadSocialPlatformSchema).array().optional(),
  notIn: z.lazy(() => LeadSocialPlatformSchema).array().optional(),
  not: z.union([ z.lazy(() => LeadSocialPlatformSchema),z.lazy(() => NestedEnumLeadSocialPlatformFilterSchema) ]).optional(),
}).strict();

export default NestedEnumLeadSocialPlatformFilterSchema;
