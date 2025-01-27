import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateManyInputSchema } from '../inputTypeSchemas/CampaignCreateManyInputSchema'

export const CampaignCreateManyArgsSchema: z.ZodType<Prisma.CampaignCreateManyArgs> = z.object({
  data: z.union([ CampaignCreateManyInputSchema,CampaignCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default CampaignCreateManyArgsSchema;
