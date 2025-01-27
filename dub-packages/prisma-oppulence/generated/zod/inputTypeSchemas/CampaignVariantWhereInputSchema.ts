import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { CampaignRelationFilterSchema } from './CampaignRelationFilterSchema';
import { CampaignWhereInputSchema } from './CampaignWhereInputSchema';

export const CampaignVariantWhereInputSchema: z.ZodType<Prisma.CampaignVariantWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CampaignVariantWhereInputSchema),z.lazy(() => CampaignVariantWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CampaignVariantWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CampaignVariantWhereInputSchema),z.lazy(() => CampaignVariantWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  campaignId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  content: z.lazy(() => JsonFilterSchema).optional(),
  metrics: z.lazy(() => JsonFilterSchema).optional(),
  campaign: z.union([ z.lazy(() => CampaignRelationFilterSchema),z.lazy(() => CampaignWhereInputSchema) ]).optional(),
}).strict();

export default CampaignVariantWhereInputSchema;
