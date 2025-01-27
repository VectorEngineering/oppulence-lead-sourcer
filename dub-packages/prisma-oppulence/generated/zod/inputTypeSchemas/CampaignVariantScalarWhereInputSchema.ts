import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';

export const CampaignVariantScalarWhereInputSchema: z.ZodType<Prisma.CampaignVariantScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CampaignVariantScalarWhereInputSchema),z.lazy(() => CampaignVariantScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CampaignVariantScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CampaignVariantScalarWhereInputSchema),z.lazy(() => CampaignVariantScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  campaignId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  content: z.lazy(() => JsonFilterSchema).optional(),
  metrics: z.lazy(() => JsonFilterSchema).optional()
}).strict();

export default CampaignVariantScalarWhereInputSchema;
