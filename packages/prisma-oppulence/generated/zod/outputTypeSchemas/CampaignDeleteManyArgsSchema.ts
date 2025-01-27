import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereInputSchema } from '../inputTypeSchemas/CampaignWhereInputSchema'

export const CampaignDeleteManyArgsSchema: z.ZodType<Prisma.CampaignDeleteManyArgs> = z.object({
  where: CampaignWhereInputSchema.optional(),
}).strict() ;

export default CampaignDeleteManyArgsSchema;
