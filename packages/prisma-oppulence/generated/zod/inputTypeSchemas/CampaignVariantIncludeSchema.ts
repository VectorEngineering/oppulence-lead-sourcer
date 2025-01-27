import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignArgsSchema } from "../outputTypeSchemas/CampaignArgsSchema"

export const CampaignVariantIncludeSchema: z.ZodType<Prisma.CampaignVariantInclude> = z.object({
  campaign: z.union([z.boolean(),z.lazy(() => CampaignArgsSchema)]).optional(),
}).strict()

export default CampaignVariantIncludeSchema;
