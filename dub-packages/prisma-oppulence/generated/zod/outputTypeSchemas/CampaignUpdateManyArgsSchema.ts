import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignUpdateManyMutationInputSchema } from '../inputTypeSchemas/CampaignUpdateManyMutationInputSchema'
import { CampaignUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CampaignUncheckedUpdateManyInputSchema'
import { CampaignWhereInputSchema } from '../inputTypeSchemas/CampaignWhereInputSchema'

export const CampaignUpdateManyArgsSchema: z.ZodType<Prisma.CampaignUpdateManyArgs> = z.object({
  data: z.union([ CampaignUpdateManyMutationInputSchema,CampaignUncheckedUpdateManyInputSchema ]),
  where: CampaignWhereInputSchema.optional(),
}).strict() ;

export default CampaignUpdateManyArgsSchema;
