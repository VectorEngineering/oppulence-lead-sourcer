import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { EnumCampaignTypeWithAggregatesFilterSchema } from './EnumCampaignTypeWithAggregatesFilterSchema';
import { CampaignTypeSchema } from './CampaignTypeSchema';
import { EnumCampaignStatusWithAggregatesFilterSchema } from './EnumCampaignStatusWithAggregatesFilterSchema';
import { CampaignStatusSchema } from './CampaignStatusSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';

export const CampaignScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CampaignScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CampaignScalarWhereWithAggregatesInputSchema),z.lazy(() => CampaignScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CampaignScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CampaignScalarWhereWithAggregatesInputSchema),z.lazy(() => CampaignScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumCampaignTypeWithAggregatesFilterSchema),z.lazy(() => CampaignTypeSchema) ]).optional(),
  status: z.union([ z.lazy(() => EnumCampaignStatusWithAggregatesFilterSchema),z.lazy(() => CampaignStatusSchema) ]).optional(),
  budget: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  actualSpend: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  impressions: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  clicks: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  conversions: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  revenue: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  roi: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  utmSource: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  utmMedium: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  utmCampaign: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  utmContent: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  utmTerm: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  abTestEnabled: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default CampaignScalarWhereWithAggregatesInputSchema;
