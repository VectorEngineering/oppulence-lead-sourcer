import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CampaignTypeSchema } from './CampaignTypeSchema';
import { NestedEnumCampaignTypeWithAggregatesFilterSchema } from './NestedEnumCampaignTypeWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumCampaignTypeFilterSchema } from './NestedEnumCampaignTypeFilterSchema';

export const EnumCampaignTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumCampaignTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CampaignTypeSchema).optional(),
  in: z.lazy(() => CampaignTypeSchema).array().optional(),
  notIn: z.lazy(() => CampaignTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => CampaignTypeSchema),z.lazy(() => NestedEnumCampaignTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCampaignTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCampaignTypeFilterSchema).optional()
}).strict();

export default EnumCampaignTypeWithAggregatesFilterSchema;
