import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DealHistoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/DealHistoryUpdateManyMutationInputSchema'
import { DealHistoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DealHistoryUncheckedUpdateManyInputSchema'
import { DealHistoryWhereInputSchema } from '../inputTypeSchemas/DealHistoryWhereInputSchema'

export const DealHistoryUpdateManyArgsSchema: z.ZodType<Prisma.DealHistoryUpdateManyArgs> = z.object({
  data: z.union([ DealHistoryUpdateManyMutationInputSchema,DealHistoryUncheckedUpdateManyInputSchema ]),
  where: DealHistoryWhereInputSchema.optional(),
}).strict() ;

export default DealHistoryUpdateManyArgsSchema;
