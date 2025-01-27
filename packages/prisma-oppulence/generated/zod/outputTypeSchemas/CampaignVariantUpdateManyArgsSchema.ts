import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignVariantUpdateManyMutationInputSchema } from '../inputTypeSchemas/CampaignVariantUpdateManyMutationInputSchema'
import { CampaignVariantUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CampaignVariantUncheckedUpdateManyInputSchema'
import { CampaignVariantWhereInputSchema } from '../inputTypeSchemas/CampaignVariantWhereInputSchema'

export const CampaignVariantUpdateManyArgsSchema: z.ZodType<Prisma.CampaignVariantUpdateManyArgs> = z.object({
  data: z.union([ CampaignVariantUpdateManyMutationInputSchema,CampaignVariantUncheckedUpdateManyInputSchema ]),
  where: CampaignVariantWhereInputSchema.optional(),
}).strict() ;

export default CampaignVariantUpdateManyArgsSchema;
