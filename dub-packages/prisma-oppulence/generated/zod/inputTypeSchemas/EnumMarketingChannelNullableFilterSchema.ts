import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MarketingChannelSchema } from './MarketingChannelSchema';
import { NestedEnumMarketingChannelNullableFilterSchema } from './NestedEnumMarketingChannelNullableFilterSchema';

export const EnumMarketingChannelNullableFilterSchema: z.ZodType<Prisma.EnumMarketingChannelNullableFilter> = z.object({
  equals: z.lazy(() => MarketingChannelSchema).optional().nullable(),
  in: z.lazy(() => MarketingChannelSchema).array().optional().nullable(),
  notIn: z.lazy(() => MarketingChannelSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => MarketingChannelSchema),z.lazy(() => NestedEnumMarketingChannelNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default EnumMarketingChannelNullableFilterSchema;
