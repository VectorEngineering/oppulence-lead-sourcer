import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadScoreHistoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadScoreHistoryUpdateManyMutationInputSchema'
import { LeadScoreHistoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadScoreHistoryUncheckedUpdateManyInputSchema'
import { LeadScoreHistoryWhereInputSchema } from '../inputTypeSchemas/LeadScoreHistoryWhereInputSchema'

export const LeadScoreHistoryUpdateManyArgsSchema: z.ZodType<Prisma.LeadScoreHistoryUpdateManyArgs> = z.object({
  data: z.union([ LeadScoreHistoryUpdateManyMutationInputSchema,LeadScoreHistoryUncheckedUpdateManyInputSchema ]),
  where: LeadScoreHistoryWhereInputSchema.optional(),
}).strict() ;

export default LeadScoreHistoryUpdateManyArgsSchema;
