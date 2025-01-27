import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignVariantSelectSchema } from '../inputTypeSchemas/CampaignVariantSelectSchema';
import { CampaignVariantIncludeSchema } from '../inputTypeSchemas/CampaignVariantIncludeSchema';

export const CampaignVariantArgsSchema: z.ZodType<Prisma.CampaignVariantDefaultArgs> = z.object({
  select: z.lazy(() => CampaignVariantSelectSchema).optional(),
  include: z.lazy(() => CampaignVariantIncludeSchema).optional(),
}).strict();

export default CampaignVariantArgsSchema;
