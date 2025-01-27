import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadHistoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadHistoryUpdateManyMutationInputSchema'
import { LeadHistoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadHistoryUncheckedUpdateManyInputSchema'
import { LeadHistoryWhereInputSchema } from '../inputTypeSchemas/LeadHistoryWhereInputSchema'

export const LeadHistoryUpdateManyArgsSchema: z.ZodType<Prisma.LeadHistoryUpdateManyArgs> = z.object({
  data: z.union([ LeadHistoryUpdateManyMutationInputSchema,LeadHistoryUncheckedUpdateManyInputSchema ]),
  where: LeadHistoryWhereInputSchema.optional(),
}).strict() ;

export default LeadHistoryUpdateManyArgsSchema;
