import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSocialPlatformSchema } from './LeadSocialPlatformSchema';
import { NestedEnumLeadSocialPlatformFilterSchema } from './NestedEnumLeadSocialPlatformFilterSchema';

export const EnumLeadSocialPlatformFilterSchema: z.ZodType<Prisma.EnumLeadSocialPlatformFilter> = z.object({
  equals: z.lazy(() => LeadSocialPlatformSchema).optional(),
  in: z.lazy(() => LeadSocialPlatformSchema).array().optional(),
  notIn: z.lazy(() => LeadSocialPlatformSchema).array().optional(),
  not: z.union([ z.lazy(() => LeadSocialPlatformSchema),z.lazy(() => NestedEnumLeadSocialPlatformFilterSchema) ]).optional(),
}).strict();

export default EnumLeadSocialPlatformFilterSchema;
