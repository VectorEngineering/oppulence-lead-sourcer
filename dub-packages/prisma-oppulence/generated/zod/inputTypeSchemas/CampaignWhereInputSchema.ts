import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumCampaignTypeFilterSchema } from './EnumCampaignTypeFilterSchema';
import { CampaignTypeSchema } from './CampaignTypeSchema';
import { EnumCampaignStatusFilterSchema } from './EnumCampaignStatusFilterSchema';
import { CampaignStatusSchema } from './CampaignStatusSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { LeadListRelationFilterSchema } from './LeadListRelationFilterSchema';
import { LeadTouchpointListRelationFilterSchema } from './LeadTouchpointListRelationFilterSchema';
import { CampaignVariantListRelationFilterSchema } from './CampaignVariantListRelationFilterSchema';

export const CampaignWhereInputSchema: z.ZodType<Prisma.CampaignWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CampaignWhereInputSchema),z.lazy(() => CampaignWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CampaignWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CampaignWhereInputSchema),z.lazy(() => CampaignWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumCampaignTypeFilterSchema),z.lazy(() => CampaignTypeSchema) ]).optional(),
  status: z.union([ z.lazy(() => EnumCampaignStatusFilterSchema),z.lazy(() => CampaignStatusSchema) ]).optional(),
  budget: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  actualSpend: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  impressions: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  clicks: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  conversions: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  revenue: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  roi: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  utmSource: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  utmMedium: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  utmCampaign: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  utmContent: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  utmTerm: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  abTestEnabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  leads: z.lazy(() => LeadListRelationFilterSchema).optional(),
  touchpoints: z.lazy(() => LeadTouchpointListRelationFilterSchema).optional(),
  variants: z.lazy(() => CampaignVariantListRelationFilterSchema).optional()
}).strict();

export default CampaignWhereInputSchema;
