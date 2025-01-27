import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionReconciliationMatchUpdateManyMutationInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchUpdateManyMutationInputSchema'
import { TransactionReconciliationMatchUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchUncheckedUpdateManyInputSchema'
import { TransactionReconciliationMatchWhereInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchWhereInputSchema'

export const TransactionReconciliationMatchUpdateManyArgsSchema: z.ZodType<Prisma.TransactionReconciliationMatchUpdateManyArgs> = z.object({
  data: z.union([ TransactionReconciliationMatchUpdateManyMutationInputSchema,TransactionReconciliationMatchUncheckedUpdateManyInputSchema ]),
  where: TransactionReconciliationMatchWhereInputSchema.optional(),
}).strict() ;

export default TransactionReconciliationMatchUpdateManyArgsSchema;
