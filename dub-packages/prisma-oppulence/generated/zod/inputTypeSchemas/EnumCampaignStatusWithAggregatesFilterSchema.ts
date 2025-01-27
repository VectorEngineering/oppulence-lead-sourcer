import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CampaignStatusSchema } from './CampaignStatusSchema';
import { NestedEnumCampaignStatusWithAggregatesFilterSchema } from './NestedEnumCampaignStatusWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumCampaignStatusFilterSchema } from './NestedEnumCampaignStatusFilterSchema';

export const EnumCampaignStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumCampaignStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CampaignStatusSchema).optional(),
  in: z.lazy(() => CampaignStatusSchema).array().optional(),
  notIn: z.lazy(() => CampaignStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => CampaignStatusSchema),z.lazy(() => NestedEnumCampaignStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCampaignStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCampaignStatusFilterSchema).optional()
}).strict();

export default EnumCampaignStatusWithAggregatesFilterSchema;
