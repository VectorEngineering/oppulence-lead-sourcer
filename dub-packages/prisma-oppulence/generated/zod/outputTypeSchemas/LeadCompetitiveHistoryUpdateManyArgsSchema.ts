import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCompetitiveHistoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadCompetitiveHistoryUpdateManyMutationInputSchema'
import { LeadCompetitiveHistoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadCompetitiveHistoryUncheckedUpdateManyInputSchema'
import { LeadCompetitiveHistoryWhereInputSchema } from '../inputTypeSchemas/LeadCompetitiveHistoryWhereInputSchema'

export const LeadCompetitiveHistoryUpdateManyArgsSchema: z.ZodType<Prisma.LeadCompetitiveHistoryUpdateManyArgs> = z.object({
  data: z.union([ LeadCompetitiveHistoryUpdateManyMutationInputSchema,LeadCompetitiveHistoryUncheckedUpdateManyInputSchema ]),
  where: LeadCompetitiveHistoryWhereInputSchema.optional(),
}).strict() ;

export default LeadCompetitiveHistoryUpdateManyArgsSchema;
